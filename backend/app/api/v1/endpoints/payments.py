from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api import deps
from app.schemas import PaymentCreate, Payment
from app.services import mpesa_service

router = APIRouter()

@router.post("/initiate", response_model=Payment)
async def initiate_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_in: PaymentCreate,
    current_user = Depends(deps.get_current_active_user),
):
    """
    Initiate M-Pesa payment.
    """
    try:
        payment = await mpesa_service.initiate_stk_push(
            db=db,
            phone_number=payment_in.phone_number,
            amount=payment_in.amount,
            user_id=current_user.id,
            order_id=payment_in.order_id
        )
        return payment
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/callback")
async def mpesa_callback(
    *,
    db: Session = Depends(deps.get_db),
    callback_data: dict,
):
    """
    M-Pesa callback endpoint.
    """
    try:
        return await mpesa_service.process_callback(db=db, callback_data=callback_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))