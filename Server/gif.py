from fastapi import APIRouter
import json

route = APIRouter(prefix = '/api-key32/gif' , tags = ['gif'])

@route.get('/')
async def gif() :
    with open('../Data/gifs.json') as f :
        gifs_data = json.load(f)
    return gifs_data

@route.get('/{meme}')
async def gif_meme(meme) :
    with open('../Data/gifs.json') as f :
        gifs_data = json.load(f)
        if meme in gifs_data :
            return gifs_data[meme]