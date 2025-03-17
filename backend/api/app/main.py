from fastapi import FastAPI
from fastapi import Response
from auth import generate_token, token_verification, verify_password

import json
import uvicorn
app = FastAPI()

@app.get("/health")
async def healthcheck():
    return Response(status_code=200, content="WORKS")

@app.get("/user/{uid}")
async def get_user(uid: str) -> Response:
    return Response(status_code=200, content=json.dumps({"message": f"getUser response with uid {uid}"}))

@app.post("/login/")
async def create_user(uid: str) -> Response:
    return Response(status_code=200, content=json.dumps({"message": f"createUser response with uid {uid}"}))

@app.delete("/user/{uid}")
async def delete_user(uid: str) -> Response:
    return Response(status_code=200, content=json.dumps({"message": f"deleteUser response with uid {uid}"}))

@app.put("/user/{uid}")
async def update_user(uid: str) -> Response:
    return Response(status_code=200, content=json.dumps({"message": f"updateUser response with uid {uid}"}))

if __name__ == "__main__":
    uvicorn.run(app, port=3000)