from pydantic import BaseModel
from sqlalchemy import Table, Column

class User(BaseModel):
    email: str
    masterPassword: str

class Credentials(BaseModel):
    url: str
    password: str