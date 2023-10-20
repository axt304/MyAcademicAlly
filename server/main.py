import uvicorn
from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext

from server.model import User, fake_users_db

SECRET_KEY = "69fe363e3c8ad17d4d8a052a17018c68394a1cba585eea0da6d89e4267b526b7"

app = FastAPI()

def fake_hash_password(password: str):
    return "fakehashed" + password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

#Example user stored in database
class UserInDB(User):
    hashed_password: str

#Example helper for prototype
def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)
    
#Example token decoder
def fake_decode_token(token):
    # This doesn't provide any security at all
    user = get_user(fake_users_db, token)
    return user

#User credentials
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

#User credetials of active user
async def get_current_active_user(
        current_user: Annotated[User, Depends(get_current_user)]
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

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

#Example login function
@app.post("/token")
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
        
    return {"access_token": user.username, "token_type": "bearer"}