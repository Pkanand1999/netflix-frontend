import axios from 'axios'



export function hollywoodMovie(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/hollywood`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"HOLLYWOOD_MOVIES",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
    
}

export function bollywoodMovie(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/bollywood`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"BOLLYWOOD_MOVIES",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}


export function cartoonMovie(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/cartoon`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"CARTOON_MOVIES",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}

export function indianWeb(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/indianWebseries`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"INDIAN_WEB_SERIES",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}

export function tvShows(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/tvshow`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"TV_SHOWS",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}


export function EnglishSeries(dispatch){
    axios.get(`http://localhost:8080/api/netflix/v2/englishSeries`)
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"ENGLISH_WEB_SERIES",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}

export function playthis(id,dispatch){
    dispatch({
        type:"VIDEO_ID",
        payload:id,
    })
}

export function userid(id,dispatch){
        dispatch({
            type:"USER_ID",
            payload:id,
        })
}

export function checkwishlist(item,dispatch){
    axios.post(`http://localhost:8080/api/netflix/v2/mywishlist`,{...item})
    .then((res)=>{
return res;
    })
    .then((res)=>{
        dispatch({
            type:"WATCH_WISHLIST",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}

export function getlist(item,dispatch){
    axios.post(`http://localhost:8080/api/netflix/v2/getlist`,{...item})
    .then((res)=>{
        console.log(res)
return res;
    })
    .then((res)=>{
        dispatch({
            type:"UPDATE_WISHLIST",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}