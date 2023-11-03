from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

import project, task, user

app = FastAPI()
app.include_router(project.router)
app.include_router(task.router)
app.include_router(user.router)

#engine=create_engine(SQL_DB)
#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#Base = declerative_base()

@app.get("/")
async def greet():
    return {"message": "Hello World"}

