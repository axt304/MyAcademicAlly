from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from db import Base

router = APIRouter()

class TaskData(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    due_date = Column(String)
    user_id = relationship("UserData")
    project_id = relationship("ProjectData")

class Task(BaseModel):
    name: str
    description: str
    due_date: str
    user_id: int
    project_id: int
    class Config:
        orm_mode = True

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
