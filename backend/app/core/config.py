from typing import List
from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl

class Settings(BaseSettings):
    PROJECT_NAME: str = "EcoMart API"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "your-secret-key-here"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = [
        "http://localhost:3000",  # Next.js frontend
    ]
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./ecommerce.db"
    
    # MPesa configuration
    MPESA_CONSUMER_KEY: str = ""
    MPESA_CONSUMER_SECRET: str = ""
    MPESA_PASSKEY: str = ""
    MPESA_SHORTCODE: str = ""
    MPESA_CALLBACK_URL: str = "http://localhost:8000/api/v1/payments/callback"

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()