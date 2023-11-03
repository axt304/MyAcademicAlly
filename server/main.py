from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

import project, task, user

app = FastAPI()

#engine=create_engine(SQL_DB)
#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#Base = declerative_base()

@app.get("/")
async def greet():
    return {"message": "Hello World"}

