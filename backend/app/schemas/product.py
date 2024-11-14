from typing import Optional
from pydantic import BaseModel, HttpUrl

class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    quantity: int
    image_url: Optional[HttpUrl] = None
    category_id: int

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    name: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None
    category_id: Optional[int] = None

class Product(ProductBase):
    id: int
    
    class Config:
        from_attributes = True