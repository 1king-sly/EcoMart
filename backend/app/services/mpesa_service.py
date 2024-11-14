import requests
import base64
from datetime import datetime
from app.core.config import settings

class MpesaService:
    def __init__(self):
        self.consumer_key = settings.MPESA_CONSUMER_KEY
        self.consumer_secret = settings.MPESA_CONSUMER_SECRET
        self.passkey = settings.MPESA_PASSKEY
        self.shortcode = settings.MPESA_SHORTCODE
        self.callback_url = settings.MPESA_CALLBACK_URL

    def get_auth_token(self):
        """Get OAuth token from Safaricom."""
        auth_string = f"{self.consumer_key}:{self.consumer_secret}"
        auth_bytes = auth_string.encode("ascii")
        auth_base64 = base64.b64encode(auth_bytes).decode("ascii")

        try:
            response = requests.get(
                "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
                headers={"Authorization": f"Basic {auth_base64}"},
            )
            response.raise_for_status()
            return response.json()["access_token"]
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to get auth token: {str(e)}")

    async def initiate_stk_push(self, db, phone_number: str, amount: float, user_id: int, order_id: int):
        """Initiate STK push to customer's phone."""
        token = self.get_auth_token()
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        password = base64.b64encode(
            f"{self.shortcode}{self.passkey}{timestamp}".encode()
        ).decode("ascii")

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }

        payload = {
            "BusinessShortCode": self.shortcode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": int(amount),
            "PartyA": phone_number,
            "PartyB": self.shortcode,
            "PhoneNumber": phone_number,
            "CallBackURL": self.callback_url,
            "AccountReference": f"Order_{order_id}",
            "TransactionDesc": "Payment for order",
        }

        try:
            response = requests.post(
                "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
                json=payload,
                headers=headers,
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to initiate payment: {str(e)}")

    async def process_callback(self, db, callback_data: dict):
        """Process M-Pesa callback data."""
        # Implement callback processing logic here
        # Update payment status in database
        # Update order status
        pass

mpesa_service = MpesaService()