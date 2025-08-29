from fastapi import APIRouter
import json , os

route = APIRouter(prefix = '/api-key32/sound' , tags = ['sound'])

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@route.get('/')
async def sound() :
    path =   os.path.join(base , "Data", "sounds.json")
    with open(path) as f :
        sounds_data = json.load(f)
    return sounds_data

@route.get('/{meme}')
async def sound_meme(meme) :
    path =   os.path.join(base , "Data", "sounds.json")
    with open(path) as f :
        sounds_data = json.load(f)
        if meme in sounds_data :
            return sounds_data[meme]
        else :
            return 'not succeful'