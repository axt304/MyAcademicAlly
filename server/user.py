from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, Session

from db import Base, get_db

router = APIRouter()

class UserData(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    password = Column(String)
    email = Column(String, unique=True)

class User(BaseModel):
    name: str
    password: str
    email: str
    class Config:
        orm_mode = True

@router.post("/api/users", tags=["users"])
async def create_user(user: User, db: Session = Depends(get_db)):
    udata = UserData(uid=get_next_available_user_id(), name=user.name, password=user.password, email=user.email)
    return {"message": "Must implement user creation"}

@router.get("/api/users/{user_id}", tags=["users"])
async def get_user(user_id: int):
    udata = fetch_user_by_id(user_id)
    return User(name=udata.name, password=udata.password, email=udata.email).dict()

@router.put("/api/users/{user_id}", tags=["users"])
async def update_user(user_id: int, user: User):
    udata = fetch_user_by_id(user_id)
    udata.name = user.name
    udata.password = user.password
    udata.email = user.email
    return {"message": "Must implement user update"}

@router.delete("/api/users/{user_id}", tags=["users"])
async def delete_user(user_id: int):
    return {"message": "Must implement user deletion"}

def get_next_available_user_id():
    return -1

def fetch_user_by_id(user_id: int):
    return UserData(uid=user_id, name="Must implement finding user by id", password="hash:salt", email="a@gmail.com")
