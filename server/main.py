from fastapi import FastAPI, Cookie
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
async def greet():
    return {"message": "Hello World"}

@app.post("/cookies/")
async def create_cookie():
    content = {"message": "Sent user cookie"}
    response = JSONResponse(content=content)
    response.set_cookie(key="user_hash", value="") #Set user hash based on current user information
    return response

@app.get("/readCookies/")
async def read_cookie(user_hash: str = Cookie(None)):
    return {"user_hash": user_hash}

class Task(BaseModel):
    name: str
    description: str
    due_date: str
    user_id: int
    project_id: int

class TaskData(BaseModel):
    name: str = None
    description: str = None
    due_date: str = None

@app.post("/api/tasks/")
async def create_task(user_hash: str, project_id: int, task: TaskData):
    user_id = find_user_id_from_hash(user_hash)
    t = Task(name=task.name, description=task.description, due_date=task.due_date, user_id=user_id, project_id=project_id)
    save_task_to_database(t)
    return t.dict()

@app.get("/api/tasks/{task_id}")
async def get_task_by_id(task_id: int, user_hash: str, project_id: int):
    task_dict = find_task_by_id(find_user_id_from_hash(user_hash), task_id, project_id)
    return TaskData(name=task_dict["name"], description=task_dict["description"], due_date=task_dict["due_date"]).dict()

@app.put("/api/tasks/{task_id}")
async def update_task_by_id(task_id: int, user_hash: str, project_id: int, new_task_data: TaskData):
    task_dict = find_task_by_id(find_user_id_from_hash(user_hash), task_id, project_id)
    
    if new_task_data.name:
        task_dict.name = new_task_data.name
    if new_task_data.description:
        task_dict.description = new_task_data.description
    if new_task_data.due_date:
        task_dict.due_date = new_task_data.due_date

    return task_dict

@app.delete("/api/tasks/{task_id}")
async def delete_task_by_id(task_id: int, user_hash: str, project_id: int):
    return {"deleted_task": task_id}

# Requires database
def save_task_to_database(task: Task):
    return 0

def find_task_by_id(user_id: int, task_id: int, project_id: int):
    return {"name": "task", "description": "test", "due_date": "01/01/1970"}

# Requires database & user auth
def find_user_id_from_hash(user_hash: str):
    return 0
