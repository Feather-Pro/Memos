from fastapi import APIRouter
import json , os

route = APIRouter(prefix = '/api-key32/gif' , tags = ['gif'])

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@route.get('/')
async def gif() :
    path =   os.path.join(base , "Data", "gifs.json")
    with open(path) as f :
        gifs_data = json.load(f)
    return gifs_data

@route.get('/{meme}')
async def gif_meme(meme) :
    path =   os.path.join(base , "Data", "gifs.json")
    with open(path) as f :
        gifs_data = json.load(f)
        if meme in gifs_data :
            return gifs_data[meme]