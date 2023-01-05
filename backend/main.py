import io
import base64
import unicodedata
from typing import Union

import PIL.Image as Image
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/test")
def read_root_post():
    return {"Hello": "World"}

@app.post("/test-with-params")
async def read_test_post(file: UploadFile = File()):
    # Load Image from base64 encoded string
    SIZE=(224,224)
    
    image_64base = file.file.read()
    image = Image.open(io.BytesIO(image_64base))
    image = image.resize(SIZE)
    image.show()
    
    # TODO: Model Prediction
    # TODO: Prediction to json format
    result = {
        "No Finding": 0.5421,
        "Hernia": 0.1235
    }
    return result