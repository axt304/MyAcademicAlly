from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class TaskData(BaseModel):
    tid: int
    name: str
    description: str
    due_date: str
    user_id: int
    project_id: int

class Task(BaseModel):
    name: str
    description: str
    due_date: str
    user_id: int
    project_id: int

@router.post("/api/tasks", tags=["tasks"])
async def create_task(task: Task):
    return {"message": "Must implement task creation"}

@router.get("/api/tasks/{task_id}", tags=["tasks"])
async def get_task(task_id: int):
    tdata = fetch_task_by_id(-1, -1, -1)
    return Task(name=tdata.name, description=tdata.description, due_date=tdata.due_date, user_id=tdata.user_id, project_id=tdata.project_id).dict()

@router.put("/api/tasks/{task_id}", tags=["tasks"])
async def update_task(task_id: int, task: Task):
    tdata = fetch_task_by_id(-1, -1, -1)
    tdata.name = task.name
    tdata.description = task.description
    tdata.due_date = task.due_date
    return {"message": "Must implement task update"}

@router.delete("/api/tasks/{task_id}", tags=["tasks"])
async def delete_task(task_id: int):
    return {"message": "Must implement task delete"}

def fetch_task_by_id(task_id: int, project_id: int, user_id:int):
    return TaskData(tid=task_id, name="", description="", due_date="", user_id=user_id, project_id=project_id)
