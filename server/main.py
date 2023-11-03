from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from endpoints import project, task, user

app = FastAPI()

app.include_router(project.router)
app.include_router(task.router)
app.include_router(user.router)

SQL_DB_URL = "mysql://172.31.17.237:3306/academicAlly"
SQL_DB_PASS = "1qaz2wsx!QAZ@WSX"

engine = create_engine(
    SQL_DB_URL, connect_args={"check_same_thread": False}
)

@app.get("/")
async def greet():
    return {"message": "Hello World"}

