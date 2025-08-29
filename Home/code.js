const port = 'memos-kzah.onrender.com/'
let theme = 'dark'
let changeThemeButton = ''
let otherChangeThemeButton = ''
const search = document.querySelector('.search-area input')
const stickySearch = document.querySelector('.sticky-search-bar input')
const closeButton = document.getElementById('close')
const stickyCloseButton = document.getElementById('sticky-close')
const templates = document.querySelector('.templates')
let pictures = null
let gifs = null
let sounds = null
let videos = null
let memeType = null
let searchText = null
let stickySearchText = null
function themeOptions(command , button) {
    if (command == 'change') {
        if (theme == 'light') {
            theme = 'dark'
        }else{
            theme = 'light'
        }
    }
    if (button == 'CTB') {
        changeThemeButton = document.querySelector('header button')
        otherChangeThemeButton = document.querySelector('.sticky-search-area .change-theme button')
    }else{
        changeThemeButton = document.querySelector('.sticky-search-area .change-theme button')
        otherChangeThemeButton = document.querySelector('header button')
    }
    const base = document.getElementById('base')
    const texts = document.querySelectorAll('a , button , input')
    const backgrounds = document.querySelectorAll('.types-filters button , .search-bar , .search-area button , .classes-filters button' )
    const stickyCloseBg = document.querySelector('#sticky-close')
    const stickyArea = document.querySelector('.sticky-search-area ')
    const stickyBorder = document.querySelector('.sticky-search-bar')
    const svg = document.querySelectorAll('.types-filters button path , .types-filters button circle , .search-area #close + button svg , .search-area #close + button svg path , .search-area #close svg path , .sticky-search-area .sticky-search-bar svg path')
    if (theme == 'dark') {
        changeThemeButton.style.rotate = '-225deg'
        otherChangeThemeButton.style.rotate = '-225deg'
        changeThemeButton.style.transition = '2s'
        document.body.style.background = '#152635'
        stickyArea.style.background = '#1a2430'
        stickyCloseBg.style.background = '#1a2430'
        base.style.background = 'linear-gradient(140deg , #006644 , #008f6b , #007a7a , #005f99 , #004c7d , #003355)'
        stickyBorder.style.borderColor = '#f0f8ff'
        texts.forEach(txt => {
            txt.style.color = '#f0f8ff'
        })
        backgrounds.forEach(bg => {
            bg.style.background = '#2c3b49'
        })
        svg.forEach(svg => {
            svg.style.fill = '#f0f8ff'
            svg.style.stroke = '#f0f8ff'
        })
        changeThemeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="144px" height="144px" viewBox="0 0 144 144" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#f0f8ff;fill-opacity:1;" d="M 71.933594 11.9375 C 69.445312 11.96875 67.464844 14.015625 67.5 16.503906 L 67.5 25.503906 C 67.476562 27.125 68.332031 28.632812 69.726562 29.453125 C 71.132812 30.273438 72.867188 30.273438 74.273438 29.453125 C 75.667969 28.632812 76.523438 27.125 76.5 25.503906 L 76.5 16.503906 C 76.523438 15.289062 76.039062 14.109375 75.183594 13.253906 C 74.316406 12.386719 73.148438 11.914062 71.933594 11.9375 Z M 32.703125 28.214844 C 30.871094 28.214844 29.226562 29.328125 28.542969 31.015625 C 27.84375 32.714844 28.261719 34.660156 29.578125 35.945312 L 35.933594 42.300781 C 37.699219 44.066406 40.546875 44.066406 42.300781 42.300781 C 44.066406 40.546875 44.066406 37.699219 42.300781 35.933594 L 35.945312 29.578125 C 35.089844 28.699219 33.929688 28.214844 32.703125 28.214844 Z M 111.148438 28.214844 C 109.980469 28.25 108.878906 28.734375 108.054688 29.578125 L 101.699219 35.933594 C 99.933594 37.699219 99.933594 40.546875 101.699219 42.300781 C 103.453125 44.066406 106.300781 44.066406 108.066406 42.300781 L 114.421875 35.945312 C 115.761719 34.648438 116.167969 32.671875 115.4375 30.960938 C 114.714844 29.238281 113.007812 28.160156 111.148438 28.214844 Z M 72 39.003906 C 53.832031 39.003906 39.003906 53.832031 39.003906 72 C 39.003906 90.167969 53.832031 104.996094 72 104.996094 C 90.167969 104.996094 104.996094 90.167969 104.996094 72 C 104.996094 53.832031 90.167969 39.003906 72 39.003906 Z M 72 48.003906 C 85.308594 48.003906 95.996094 58.691406 95.996094 72 C 95.996094 85.308594 85.308594 95.996094 72 95.996094 C 58.691406 95.996094 48.003906 85.308594 48.003906 72 C 48.003906 58.691406 58.691406 48.003906 72 48.003906 Z M 16.503906 67.5 C 14.871094 67.476562 13.363281 68.332031 12.554688 69.726562 C 11.734375 71.132812 11.734375 72.867188 12.554688 74.273438 C 13.363281 75.667969 14.871094 76.523438 16.503906 76.5 L 25.503906 76.5 C 27.125 76.523438 28.632812 75.667969 29.453125 74.273438 C 30.273438 72.867188 30.273438 71.132812 29.453125 69.726562 C 28.632812 68.332031 27.125 67.476562 25.503906 67.5 Z M 118.496094 67.5 C 116.875 67.476562 115.367188 68.332031 114.546875 69.726562 C 113.726562 71.132812 113.726562 72.867188 114.546875 74.273438 C 115.367188 75.667969 116.875 76.523438 118.496094 76.5 L 127.496094 76.5 C 129.128906 76.523438 130.636719 75.667969 131.445312 74.273438 C 132.265625 72.867188 132.265625 71.132812 131.445312 69.726562 C 130.636719 68.332031 129.128906 67.476562 127.496094 67.5 Z M 39.027344 100.339844 C 37.855469 100.371094 36.753906 100.855469 35.933594 101.699219 L 29.578125 108.054688 C 27.808594 109.824219 27.808594 112.667969 29.578125 114.421875 C 31.332031 116.191406 34.175781 116.191406 35.945312 114.421875 L 42.300781 108.066406 C 43.640625 106.773438 44.042969 104.792969 43.3125 103.074219 C 42.59375 101.363281 40.882812 100.28125 39.027344 100.339844 Z M 104.828125 100.339844 C 102.992188 100.339844 101.351562 101.453125 100.664062 103.140625 C 99.96875 104.839844 100.382812 106.785156 101.699219 108.066406 L 108.054688 114.421875 C 109.824219 116.191406 112.667969 116.191406 114.421875 114.421875 C 116.191406 112.667969 116.191406 109.824219 114.421875 108.054688 L 108.066406 101.699219 C 107.210938 100.824219 106.042969 100.328125 104.828125 100.339844 Z M 71.933594 113.941406 C 69.445312 113.972656 67.464844 116.019531 67.5 118.496094 L 67.5 127.496094 C 67.476562 129.128906 68.332031 130.636719 69.726562 131.445312 C 71.132812 132.265625 72.867188 132.265625 74.273438 131.445312 C 75.667969 130.636719 76.523438 129.128906 76.5 127.496094 L 76.5 118.496094 C 76.523438 117.28125 76.039062 116.109375 75.183594 115.257812 C 74.316406 114.390625 73.148438 113.917969 71.933594 113.941406 Z M 71.933594 113.941406 "/></g></svg>'
        otherChangeThemeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="144px" height="144px" viewBox="0 0 144 144" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#f0f8ff;fill-opacity:1;" d="M 71.933594 11.9375 C 69.445312 11.96875 67.464844 14.015625 67.5 16.503906 L 67.5 25.503906 C 67.476562 27.125 68.332031 28.632812 69.726562 29.453125 C 71.132812 30.273438 72.867188 30.273438 74.273438 29.453125 C 75.667969 28.632812 76.523438 27.125 76.5 25.503906 L 76.5 16.503906 C 76.523438 15.289062 76.039062 14.109375 75.183594 13.253906 C 74.316406 12.386719 73.148438 11.914062 71.933594 11.9375 Z M 32.703125 28.214844 C 30.871094 28.214844 29.226562 29.328125 28.542969 31.015625 C 27.84375 32.714844 28.261719 34.660156 29.578125 35.945312 L 35.933594 42.300781 C 37.699219 44.066406 40.546875 44.066406 42.300781 42.300781 C 44.066406 40.546875 44.066406 37.699219 42.300781 35.933594 L 35.945312 29.578125 C 35.089844 28.699219 33.929688 28.214844 32.703125 28.214844 Z M 111.148438 28.214844 C 109.980469 28.25 108.878906 28.734375 108.054688 29.578125 L 101.699219 35.933594 C 99.933594 37.699219 99.933594 40.546875 101.699219 42.300781 C 103.453125 44.066406 106.300781 44.066406 108.066406 42.300781 L 114.421875 35.945312 C 115.761719 34.648438 116.167969 32.671875 115.4375 30.960938 C 114.714844 29.238281 113.007812 28.160156 111.148438 28.214844 Z M 72 39.003906 C 53.832031 39.003906 39.003906 53.832031 39.003906 72 C 39.003906 90.167969 53.832031 104.996094 72 104.996094 C 90.167969 104.996094 104.996094 90.167969 104.996094 72 C 104.996094 53.832031 90.167969 39.003906 72 39.003906 Z M 72 48.003906 C 85.308594 48.003906 95.996094 58.691406 95.996094 72 C 95.996094 85.308594 85.308594 95.996094 72 95.996094 C 58.691406 95.996094 48.003906 85.308594 48.003906 72 C 48.003906 58.691406 58.691406 48.003906 72 48.003906 Z M 16.503906 67.5 C 14.871094 67.476562 13.363281 68.332031 12.554688 69.726562 C 11.734375 71.132812 11.734375 72.867188 12.554688 74.273438 C 13.363281 75.667969 14.871094 76.523438 16.503906 76.5 L 25.503906 76.5 C 27.125 76.523438 28.632812 75.667969 29.453125 74.273438 C 30.273438 72.867188 30.273438 71.132812 29.453125 69.726562 C 28.632812 68.332031 27.125 67.476562 25.503906 67.5 Z M 118.496094 67.5 C 116.875 67.476562 115.367188 68.332031 114.546875 69.726562 C 113.726562 71.132812 113.726562 72.867188 114.546875 74.273438 C 115.367188 75.667969 116.875 76.523438 118.496094 76.5 L 127.496094 76.5 C 129.128906 76.523438 130.636719 75.667969 131.445312 74.273438 C 132.265625 72.867188 132.265625 71.132812 131.445312 69.726562 C 130.636719 68.332031 129.128906 67.476562 127.496094 67.5 Z M 39.027344 100.339844 C 37.855469 100.371094 36.753906 100.855469 35.933594 101.699219 L 29.578125 108.054688 C 27.808594 109.824219 27.808594 112.667969 29.578125 114.421875 C 31.332031 116.191406 34.175781 116.191406 35.945312 114.421875 L 42.300781 108.066406 C 43.640625 106.773438 44.042969 104.792969 43.3125 103.074219 C 42.59375 101.363281 40.882812 100.28125 39.027344 100.339844 Z M 104.828125 100.339844 C 102.992188 100.339844 101.351562 101.453125 100.664062 103.140625 C 99.96875 104.839844 100.382812 106.785156 101.699219 108.066406 L 108.054688 114.421875 C 109.824219 116.191406 112.667969 116.191406 114.421875 114.421875 C 116.191406 112.667969 116.191406 109.824219 114.421875 108.054688 L 108.066406 101.699219 C 107.210938 100.824219 106.042969 100.328125 104.828125 100.339844 Z M 71.933594 113.941406 C 69.445312 113.972656 67.464844 116.019531 67.5 118.496094 L 67.5 127.496094 C 67.476562 129.128906 68.332031 130.636719 69.726562 131.445312 C 71.132812 132.265625 72.867188 132.265625 74.273438 131.445312 C 75.667969 130.636719 76.523438 129.128906 76.5 127.496094 L 76.5 118.496094 C 76.523438 117.28125 76.039062 116.109375 75.183594 115.257812 C 74.316406 114.390625 73.148438 113.917969 71.933594 113.941406 Z M 71.933594 113.941406 "/></g></svg>'
        theme = 'dark'
    }else {
        changeThemeButton.style.rotate = '-360deg'
        otherChangeThemeButton.style.rotate = '-360deg'
        changeThemeButton.style.transition = '2s'
        document.body.style.background = '#f0f8ff'
        stickyArea.style.background = '#f0ffff'
        stickyCloseBg.style.background = '#f0ffff'
        base.style.background = 'linear-gradient(140deg, #2ecc71 , #55efc4 , #81ecec , #90e0ef , #48cae4)'
        stickyBorder.style.borderColor = '#1e3050'
        texts.forEach(txt => {
            txt.style.color = '#1e3050'
        })
        backgrounds.forEach(bg => {
            bg.style.background = '#f0f8ff'
        })
        svg.forEach(svg => {
            svg.style.fill = '#1e3050'
            svg.style.stroke = '#1e3050'
        })
        changeThemeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144"><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:#1e3050;stroke-opacity:1;stroke-miterlimit:4" d="M12 3c.132 0 .263 0 .393 0C9.742 5.463 9.228 9.468 11.171 12.521c1.943 3.053 5.789 4.283 9.143 2.926-1.733 4.169-6.286 6.41-10.646 5.238C5.307 19.512 2.489 15.291 3.079 10.815 3.67 6.339 7.485 2.993 12 2.992ZM12 3" transform="matrix(6,0,0,6,0,0)"/></svg>'
        otherChangeThemeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144"><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:#1e3050;stroke-opacity:1;stroke-miterlimit:4" d="M12 3c.132 0 .263 0 .393 0C9.742 5.463 9.228 9.468 11.171 12.521c1.943 3.053 5.789 4.283 9.143 2.926-1.733 4.169-6.286 6.41-10.646 5.238C5.307 19.512 2.489 15.291 3.079 10.815 3.67 6.339 7.485 2.993 12 2.992ZM12 3" transform="matrix(6,0,0,6,0,0)"/></svg>'
        theme = 'light'
    }
}
function __filter__(cb , sb , c) {
    const Buttons = document.querySelectorAll('.types-filters button , .classes-filters button')
    const classesButtons = document.querySelectorAll(cb)
    const classes = document.querySelectorAll(c)
    const selectedButton = document.getElementById(sb)
    const allClass = document.getElementById('all')
    Buttons.forEach(btns => {
        btns.classList.remove('selected')
    })
    classesButtons.forEach(btns => {
        btns.style.display = 'none'
    })
    classes.forEach(cl => {
        cl.style.display = 'inline'
    })
    selectedButton.classList.add('selected')
    allClass.classList.add('selected')
}
async function typeFilter(type) {
    templates.classList.remove('group')
     if (type == 'picture') {
        __filter__('.gif-classes , .sound-classes , .video-classes' , 'picture' , '.global-classes , .picture-classes')
        if (pictures == null) {
            pictures = await __memes__('picture')
        }
        templates.innerHTML = pictures
        memeType = 'picture'
    }else if (type == 'gif') {
        __filter__('.picture-classes , .sound-classes , .video-classes' , 'gif' , '.global-classes , .gif-classes')
        if (gifs == null) {
            gifs = await __memes__('gif')
        }
        templates.innerHTML = gifs
        memeType = 'gif'
    }else if (type == 'sound') {
        __filter__('.gif-classes , .picture-classes , .video-classes' , 'sound' , '.global-classes , .sound-classes')
        if (sounds == null) {
            sounds = await __memes__('sound')
        }
        templates.classList.add('group')
        templates.innerHTML = sounds
        memeType = 'sound'
    }else if (type == 'video') {
        __filter__('.gif-classes , .sound-classes , .picture-classes' , 'video' , '.global-classes , .video-classes' )
        if (videos == null) {
            videos = await __memes__('video')
        }
        templates.innerHTML = videos
        memeType = 'video'
    }
}
function showCloseButton(input) {
    if (input == 'static') {
        if (search.value == '') {
            closeButton.style.display = 'none'
        }else {
            closeButton.style.display = 'inline'
            searchText = search.value
        }
    }else{
        if (stickySearch.value == '') {
            stickyCloseButton.style.display = 'none'
        }else {
            stickyCloseButton.style.display = 'inline'
            stickySearchText = stickySearch.value
        }
    }
    
}
function clearSearch(input) {
    if (input == 'static') {
        search.value = ''
        closeButton.style.display = 'none'
    }else{
        stickySearch.value = ''
        stickyCloseButton.style.display = 'none'
    }
}
function displayStickyArea() {
    const area = document.querySelector('.sticky-search-area')
    if (window.scrollY >= 300) {
        area.style.display = 'inline-flex'
    }else{
        area.style.display = 'none'
    }
}
async function __memes__(type) {
    const response = await fetch(`http://${port}/api-key32/${type}/count`)
    const count = await response.json()
    let group = ''
    for (var id = count;id > 0;id --) {
        const memeResponse = await fetch(`http://${port}/api-key32/${type}/${id}`)
        const data = await memeResponse.json()
        const extention = (type == 'picture') ? `<img src="${data.picture_url}" alt="${data.name}">` : ((type == 'gif') ? `<video autoplay loop src="${data.video_url}"></video>` : ((type == 'sound') ? `<audio src="${data.sound_url}" controls></audio>` : `<video controls src="${data.video_url}"></video>`))
        group += `<a href="http://${port}/${type}/${data.id}?i=${id}&t=${theme[0]}" target="_blank"><figure>${extention}<figcaption>${data.name}</figcaption></figure></a>`
    }
    return group
}
async function searchResults(type , event) {
    event.preventDefault()
    templates.classList.remove('group')
    let text = null
    if (type == 'static') {
        text = searchText
    }
    else {
        text = stickySearchText
    }
    const response = await fetch(`http://${port}/api-key32/${memeType}/count`)
    const count = await response.json()
    let results = []
    for (var id = count;id > 0;id --) {
        const memeResponse = await fetch(`http://${port}/api-key32/${memeType}/${id}`)
        const data = await memeResponse.json()
        const memeName = data.name.toLowerCase()
        const memeKeywords = data.keywords
        const nameFound = memeName.includes(text.toLowerCase())
        const keywordFound = memeKeywords.some(kw => kw.includes(text.toLowerCase()))
        if (nameFound) {
            results.push(id)
        } else if (keywordFound) {
            results.push(id)
        }
    } // var id = 0;id < results.length;id ++
    let group = ''
    for (var id = 0;id < results.length;id ++) {
        const memeResponse = await fetch(`http://${port}/api-key32/${memeType}/${results[id]}`)
        const data = await memeResponse.json()
        const extention = (memeType == 'picture') ? `<img src="${data.picture_url}" alt="${data.name} Meme>` : ((memeType == 'gif') ? `<video autoplay loop src="${data.video_url} type="mp4"></video>` : ((memeType == 'sound') ? `<audio src="${data.sound_url}" controls type="mp4"></audio>` : `<video controls src="${data.video_url}"></video>`))
        group += `<a href="http://${port}/${memeType}/${data.id}?i=${id}&t=${theme[0]}" target="_blank"><figure>${extention}<figcaption>${data.name}</figcaption></figure></a>`
    }
    templates.innerHTML = group
    if (results.length == 0) {
        templates.classList.add('group')
        templates.innerHTML = '<img src="../Pictures/not-found.webp" alt="not-found">'
    }
}
async function classFilter(Class , selectedButton) {
    const classes = document.querySelectorAll('.classes-filters button')
    classes.forEach(cl => {
        cl.classList.remove('selected')
    })
    templates.classList.remove('group')
    selectedButton.classList.add('selected')
    if (Class == 'all') {
        if (memeType == 'picture') {
            templates.innerHTML = pictures
        } else if (memeType == 'gif') {
            templates.innerHTML = gifs
        } else if (memeType == 'sound') {
            templates.innerHTML = sounds
        } else {
            templates.innerHTML = videos
        }
    }
    else {
        const response = await fetch(`http://${port}/api-key32/${memeType}/count`)
        const count = await response.json()
        let results = []
        for (var id = count;id > 0;id --) {
            const memeResponse = await fetch(`http://${port}/api-key32/${memeType}/${id}`)
            const data = await memeResponse.json()
            const memeClass = data.classes
            const classFound = memeClass.some(cl => cl == Class)
            if (classFound) {
                results.push(id)
            }
        }
        let group = ''
        for (var id = 0;id < results.length;id ++) {
            const memeResponse = await fetch(`http://${port}/api-key32/${memeType}/${results[id]}`)
            const data = await memeResponse.json()
            const extention = (memeType == 'picture') ? `<img src="${data.picture_url}" alt="${data.name} Meme">` : ((memeType == 'gif') ? `<video autoplay loop src="${data.video_url}" type="mp4"></video>` : ((memeType == 'sound') ? `<audio src="${data.sound_url}" controls type="mp4"></audio>` : `<video controls src="${data.video_url}"></video>`))
            group += `<a href="http://${port}/${memeType}/${data.id}?i=${id}&t=${theme[0]}" target="_blank"><figure>${extention}<figcaption>${data.name}</figcaption></figure></a>`
        }
        templates.innerHTML = group
        if (results.length == 0) {
            templates.classList.add('group')
            templates.innerHTML = '<img src="../Pictures/not-found.webp" alt="Not found">'
        }
    }
}
window.addEventListener('scroll' , displayStickyArea)
themeOptions('set' , 'CTB')
typeFilter('picture')

