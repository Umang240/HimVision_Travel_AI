from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.services.chat_service import chat_with_ai

router = APIRouter()

@router.post("/chat")
def chat(request: ChatRequest):
    response = chat_with_ai(request.message)

    return {
        "status": "success",
        "response": response
    }
