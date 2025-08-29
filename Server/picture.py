from fastapi import APIRouter
import json

route = APIRouter(prefix = '/api-key32/picture' , tags = ['picture'])

@route.get('/')
async def picture() :
    with open('../Data/pictures.json') as f :
        pictures_data = json.load(f)
    return pictures_data

@route.get('/{meme}')
async def picture_meme(meme) :
    with open('../Data/pictures.json') as f :
        pictures_data = json.load(f)
        if meme in pictures_data :
            return pictures_data[meme]