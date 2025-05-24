import os
from http import HTTPStatus
from dashscope import Application
import dashscope
from app.schemas import RecommendationRequest
from dotenv import load_dotenv
from fastapi import HTTPException

load_dotenv()

# Set the base URL for international users
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

async def generate_recommendation(data: RecommendationRequest):
    # Prepare the input data in the same format as Model Studio
    input_data = {
        "user_id": data.user_id,
        "app_context": data.app_context,
        "timestamp": data.timestamp.strftime('%Y-%m-%dT%H:%M:%S'),
        "weather": data.weather
    }
    
    try:
        response = Application.call(
            api_key=os.getenv("DASHSCOPE_API_KEY"),
            app_id=os.getenv("DASHSCOPE_APP_ID"),
            prompt=str(input_data)
        )

        if response.status_code != HTTPStatus.OK:
            raise HTTPException(
                status_code=500,
                detail=f"Error from DashScope: {response.message} (code: {response.status_code})"
            )

        return {
            "status": "success",
            "data": {
                "message": response.output.text
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")
