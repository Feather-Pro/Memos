from fastapi import APIRouter
import json , os

route = APIRouter(prefix = '/api-key32/picture' , tags = ['picture'])

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@route.get('/')
async def picture() :
    path =   os.path.join(base , "Data", "pictures.json")
    with open(path) as f :
        pictures_data = json.load(f)
    return pictures_data

@route.get('/{meme}')
async def picture_meme(meme) :
    path =   os.path.join(base , "Data", "pictures.json")
    with open(path) as f :
        pictures_data = json.load(f)
        if meme in pictures_data :
            return pictures_data[meme]