from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Temporary in-memory storage
appointments = []

class Appointment(BaseModel):
    name: str
    email: str
    date: str
    message: str

@app.get("/")
def home():
    return {"message": "Dental API Running"}

@app.post("/api/book")
def book(data: Appointment):
    appointments.append(data.dict())
    return {"message": "Appointment booked successfully"}

@app.get("/api/appointments")
def get_all():
    return appointments

# Vercel handler
def handler(request, response):
    return app