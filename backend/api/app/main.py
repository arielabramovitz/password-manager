from fastapi import FastAPI
from fastapi import Response
import uvicorn
app = FastAPI()
app

@app.get("/health")
async def APIHealthcheck():
    return Response(status_code=200, content="WORKS")

@app.get("/user/{uid}")
async def getUser(uid):
    return {"uid": uid}

if __name__ == "__main__":
    uvicorn.run(app, port=3000)