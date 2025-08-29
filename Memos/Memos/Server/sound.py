from fastapi import APIRouter
import json

route = APIRouter(prefix = '/api-key32/sound' , tags = ['sound'])

@route.get('/')
async def sound() :
    with open('../Data/sounds.json') as f :
        sounds_data = json.load(f)
    return sounds_data

@route.get('/{meme}')
async def sound_meme(meme) :
    with open('../Data/sounds.json') as f :
        sounds_data = json.load(f)
        if meme in sounds_data :
            return sounds_data[meme]
        else :
            return 'not succeful'