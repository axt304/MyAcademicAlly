import uvicorn
from typing import Annotated
from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer

from server.model import User

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

#Example token decoder
def fake_decode_token(token):
    return User(
        username = token + "fakecode", email="johndoe@example.com", fullName="John Doe"
    )

#User credentials
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    return user

#Test
@app.get("/", tags=["test"])
async def greet():
    return {"message": "Hello World"}

#Example path, used for prototype
@app.get("/tasks/")
async def read_tasks(token: Annotated[str, Depends(oauth2_scheme)]):
    return{"token":token}

#Path to get current user
@app.get("/users/me")
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user
