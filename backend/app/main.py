from fastapi import FastAPI, Depends
from app.services.recommender import generate_recommendation
from app.services.budget import upsert_user_budget
from app.schemas import RecommendationRequest, UserBudgetUpdate
import uvicorn

app = FastAPI()

@app.post("/recommend")
async def recommend(data: RecommendationRequest):
    result = await generate_recommendation(data)
    return result

@app.post("/users/{user_id}/budget")
async def upsert_budget(user_id: str, budget_update: UserBudgetUpdate):
    result = await upsert_user_budget(user_id, budget_update)
    return result

if __name__ == "__main__":
    uvicorn.run("app.main:app", reload=True)
