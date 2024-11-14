from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.api import deps
from app.schemas import Product, ProductCreate, ProductUpdate
from app.crud import product as crud_product

router = APIRouter()

@router.get("/", response_model=List[Product])
def get_products(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    category_id: Optional[int] = None,
):
    """
    Retrieve products with optional category filter.
    """
    return crud_product.get_products(db, skip=skip, limit=limit, category_id=category_id)

@router.post("/", response_model=Product)
def create_product(
    *,
    db: Session = Depends(deps.get_db),
    product_in: ProductCreate,
    current_user = Depends(deps.get_current_active_superuser),
):
    """
    Create new product (admin only).
    """
    product = crud_product.create(db, obj_in=product_in)
    return product

@router.put("/{product_id}", response_model=Product)
def update_product(
    *,
    db: Session = Depends(deps.get_db),
    product_id: int,
    product_in: ProductUpdate,
    current_user = Depends(deps.get_current_active_superuser),
):
    """
    Update product (admin only).
    """
    product = crud_product.get(db, id=product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    product = crud_product.update(db, db_obj=product, obj_in=product_in)
    return product

@router.get("/{product_id}", response_model=Product)
def get_product(
    *,
    db: Session = Depends(deps.get_db),
    product_id: int,
):
    """
    Get product by ID.
    """
    product = crud_product.get(db, id=product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product