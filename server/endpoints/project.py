from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ProjectData(BaseModel):
    pid: int
    name: str
    color: str
    user_id: int

class Project(BaseModel):
    name: str
    color: str
    user_id: int

@router.post("/api/projects", tags=["projects"])
async def create_project(project: Project):
    return {"message": "Must implement project creation"}

@router.get("/api/projects/{project_id}", tags=["projects"])
async def get_project(project_id: int):
    pdata = fetch_project_by_id(-1, -1)
    return Project(name=pdata.name, color=pdata.color, user_id=pdata.user_id).dict()

@router.put("/api/projects/{project_id}", tags=["projects"])
async def update_project(project_id: int, project: Project):
    pdata = fetch_project_by_id(-1, -1)
    pdata.name = project.name
    pdata.color = project.color
    return {"message": "Must implement project update"}

@router.delete("/api/projects/{project_id}", tags=["projects"])
async def delete_project(project_id: int):
    return {"message": "Must implement project delete"}

def fetch_project_by_id(project_id: int, user_id: int):
    return ProjectData(pid=project_id, name="", color="white", user_id=user_id)
