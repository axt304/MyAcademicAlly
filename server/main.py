from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from endpoints import project, task, user

app = FastAPI()

app.include_router(project.router)
app.include_router(task.router)
app.include_router(user.router)

@app.get("/")
async def greet():
    return {"message": "Hello World"}

