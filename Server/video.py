from fastapi import APIRouter
import json

route = APIRouter(prefix = '/api-key32/video' , tags = ['video'])

@route.get('/')
async def video() :
    with open('../Data/videos.json') as f :
        videos_data = json.load(f)
    return videos_data

@route.get('/{meme}')
async def video_meme(meme) :
    with open('../Data/videos.json') as f :
        videos_data = json.load(f)
        if meme in videos_data :
            return videos_data[meme]