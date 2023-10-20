from pydantic import BaseModel

#Example model, used for prototype, NOT SECURE
class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str  | None = None
    disabled: bool  | None = None 

#Fake user data for prototype
fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "fakehashedsecret",
        "disabled": False,
    },
    "janedoe": {
        "username": "janedoe",
        "full_name": "Jane Doe",
        "email": "janedoe@example.com",
        "hashed_password": "fakehashedsecret2",
        "disabled": True,
    }
}