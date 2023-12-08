from fastapi import FastAPI
<<<<<<< HEAD
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def root():
    return {"Hello":"World"}
=======
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

