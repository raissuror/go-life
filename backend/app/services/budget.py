from app.models import get_connection
from app.schemas import UserBudgetUpdate
from fastapi import HTTPException

async def upsert_user_budget(user_id: str, budget_update: UserBudgetUpdate):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        
        # Check if budget exists for the user and month
        cursor.execute(
            "SELECT * FROM user_budget WHERE user_id = %s AND month = %s",
            (user_id, budget_update.month)
        )
        existing_budget = cursor.fetchone()
        
        if existing_budget:
            # Update existing budget
            cursor.execute(
                "UPDATE user_budget SET budget_amount = %s WHERE user_id = %s AND month = %s",
                (budget_update.budget_amount, user_id, budget_update.month)
            )
        else:
            # Insert new budget
            cursor.execute(
                "INSERT INTO user_budget (user_id, budget_amount, month) VALUES (%s, %s, %s)",
                (user_id, budget_update.budget_amount, budget_update.month)
            )
        
        conn.commit()
        
        # Get the upserted budget
        cursor.execute(
            "SELECT * FROM user_budget WHERE user_id = %s AND month = %s",
            (user_id, budget_update.month)
        )
        result = cursor.fetchone()
        
        return result
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
        conn.close() 