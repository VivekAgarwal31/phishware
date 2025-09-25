from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Phish Aware API")

class UrlRequest(BaseModel):
    url: str

class PredictResponse(BaseModel):
    url: str
    risk_score: float
    label: str

@app.get("/")
def read_root():
    return {"status": "ok", "service": "phish-aware-api"}

@app.post("/predict", response_model=PredictResponse)
def predict(req: UrlRequest):
    # Placeholder logic: produce a deterministic pseudo score
    score = abs(hash(req.url)) % 100 / 100.0
    label = "phishing" if score > 0.6 else "benign"
    return {"url": req.url, "risk_score": score, "label": label}

# If running directly: uvicorn backend.app:app --reload
