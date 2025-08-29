from fastapi import APIRouter
import json , os

route = APIRouter(prefix = '/api-key32/video' , tags = ['video'])

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@route.get('/')
async def video() :
    path =   os.path.join(base , "Data", "videos.json")
    with open(path) as f :
        videos_data = json.load(f)
    return videos_data

@route.get('/{meme}')
async def video_meme(meme) :
    path =   os.path.join(base , "Data", "videos.json")
    with open(path) as f :
        videos_data = json.load(f)
        if meme in videos_data :
            return videos_data[meme]