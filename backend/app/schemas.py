from pydantic import BaseModel
from datetime import datetime

class RecommendationRequest(BaseModel):
    user_id: str
    app_context: str
    timestamp: datetime
    weather: str

class UserBudgetIn(BaseModel):
    user_id: str
    budget_amount: int
    month: datetime

class UserBudgetUpdate(BaseModel):
    budget_amount: int
    month: datetime