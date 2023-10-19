from pydantic import BaseModel

#Example model, used for prototype, NOT SECURE
class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str  | None = None
    disabled: bool  | None = None 