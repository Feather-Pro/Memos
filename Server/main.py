from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse , FileResponse
from fastapi.staticfiles import StaticFiles
import json , picture , gif , sound , video

server = FastAPI()

server.add_middleware(
    CORSMiddleware ,
    allow_origins = ['*'] ,
    allow_credentials = True ,
    allow_methods = ['*'] ,
    allow_headers = ['*']
)

@server.get('/')
async def home() : 
    return FileResponse('../Home/index.html' , media_type = 'text/html')

@server.get('/decore.css')
async def decore() :
      return FileResponse('../Home/decore.css' , media_type = 'text/css')

@server.get('/code.js')
async def code() :
      return FileResponse('../Home/code.js' , media_type = 'application/javascript')

@server.get('/Pictures/not-found.webp')
async def no_found() :
      return FileResponse('../Pictures/not-found.webp' , media_type = 'image/webp')

@server.get('/api-key32')
async def api() :
      return {'picture' : 'http://127.0.0.1:8000/api-key32/picture/' ,'gif' : 'http://127.0.0.1:8000/api-key32/gif/' ,'sound' : 'http://127.0.0.1:8000/api-key32/sound/' ,'video' : 'http://127.0.0.1:8000/api-key32/video/'}

@server.get('/picture/{picture}' , response_class = HTMLResponse)
async def picture_download(picture , i : str , t : str) :
      with open('../Download/download.html') as f :
            download_page = f.read()
      with open('../Data/pictures.json') as f:
            pictures = json.load(f)[i]
            name = pictures['name']
            url = pictures['picture_url']
            Id = pictures['id']
      download_page = download_page.replace('{meme name}' , name)
      download_page = download_page.replace('{meme picture url}' , f'<img width="80%" src="{url}">')
      download_page = download_page.replace('{meme url}' , url)
      download_page = download_page.replace('{meme id}' , Id)
      if t == 'l' :
            download_page = download_page.replace('transparent' , '#f0f8ff')
      else :
            download_page = download_page.replace('transparent' , '#152635')
      return download_page

@server.get('/gif/{gif}' , response_class = HTMLResponse)
async def gif_download(gif , i : str , t : str) :
      with open('../Download/download.html') as f :
            download_page = f.read()
      with open('../Data/gifs.json') as f:
            gifs = json.load(f)[i]
            name = gifs['name']
            url = gifs['gif_url']
            Id = gifs['id']
      download_page = download_page.replace('{meme name}' , name)
      download_page = download_page.replace('{meme picture url}' , f'<img width="80%" src="{url}">')
      download_page = download_page.replace('{meme url}' , url)
      download_page = download_page.replace('{meme id}' , Id)
      if t == 'l' :
            download_page = download_page.replace('transparent' , '#f0f8ff')
      else :
            download_page = download_page.replace('transparent' , '#152635')
      return download_page

@server.get('/sound/{sound}' , response_class = HTMLResponse)
async def sound_download(sound , i : str , t : str) :
      with open('../Download/download.html') as f :
            download_page = f.read()
      with open('../Data/sounds.json') as f:
            sounds = json.load(f)[i]
            name = sounds['name']
            url = sounds['sound_url']
            Id = sounds['id']
      download_page = download_page.replace('{meme name}' , name)
      download_page = download_page.replace('{meme picture url}' , f'<audio width="80%" controls src="{url}"></audio>')
      download_page = download_page.replace('{meme url}' , url)
      download_page = download_page.replace('{meme id}' , Id)
      if t == 'l' :
            download_page = download_page.replace('transparent' , '#f0f8ff')
      else :
            download_page = download_page.replace('transparent' , '#152635')
      return download_page

@server.get('/video/{video}' , response_class = HTMLResponse)
async def gif_download(video , i : str , t : str) :
      with open('../Download/download.html') as f :
            download_page = f.read()
      with open('../Data/videos.json') as f:
            video = json.load(f)[i]
            name = video['name']
            url = video['video_url']
            Id = video['id']
      download_page = download_page.replace('{meme name}' , name)
      download_page = download_page.replace('{meme picture url}' , f'<video width="80%" controls src="{url}"></video>')
      download_page = download_page.replace('{meme url}' , url)
      download_page = download_page.replace('{meme id}' , Id)
      if t == 'l' :
            download_page = download_page.replace('transparent' , '#f0f8ff')
      else :
            download_page = download_page.replace('transparent' , '#152635')
      return download_page

server.include_router(picture.route)
server.include_router(gif.route)
server.include_router(sound.route)
server.include_router(video.route)
