import jwt
from datetime import datetime, timedelta
from typing import Annotated
from pydantic import BaseModel
from models import User
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from starlette import status
from backend.api.app.db.db import get_db
from dotenv import load_dotenv
from fastapi import APIRouter, Depends
from passlib.context import CryptContext 

import os


load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")
TOKEN_DURATION = os.getenv("TOKEN_DURATION")
REFRESH_DURATION = os.getenv("REFRESH_DURATION")
ALGORITHM = "HS256"
router = APIRouter(prefix="/auth", tags=["auth"])
crypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
auth_bearer = OAuth2PasswordBearer(tokenUrl="/login")
db_depends = Annotated(Session, Depends(get_db))


def generate_token(payload: dict, refresh: bool = False):
    td = timedelta(minutes=int(TOKEN_DURATION))
    if refresh:
        td = timedelta(minutes=int(REFRESH_DURATION))
    expiration = datetime.now() + td
    payload.update({"exp": expiration})
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token

def token_verification(token: str = Depends(auth_bearer)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return status.HTTP_401_UNAUTHORIZED
    except jwt.InvalidTokenError:
        return status.HTTP_401_UNAUTHORIZED
    
def verify_password(plain_password, hashed_password):
    return crypt_context.verify(plain_password, hashed_password)    
