import axios from 'axios'

const url=import.meta.env.VITE_BASE_URL

export function hollywoodMovie(dispatch){
    axios.get(`${url}/hollywood`)
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
    axios.get(`${url}/bollywood`)
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
    axios.get(`${url}/cartoon`)
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
    axios.get(`${url}/indianWebseries`)
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
    axios.get(`${url}/tvshow`)
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
    axios.get(`${url}/englishSeries`)
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
    axios.post(`${url}/mywishlist`,{...item})
    .then((res)=>{
return res;
    })
    .then((res)=>{
        console.log("done")
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
    axios.post(`${url}/getlist`,{...item})
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

export function Subscribe(item,dispatch){
    axios.post(`${url}/user`,{...item})
    .then((res)=>{
        console.log(res)
        console.log(res)
return res;
    })
    .then((res)=>{
        console.log(res)
        console.log(res)
        console.log(res)
        dispatch({
            type:"SUBSCRIPTION",
            payload: res.data,
        })
    })
    .catch((res)=>{
        console.log(res);
    })
}


export function SubscribePlan(item,dispatch){
    axios.post(`${url}/plan`,{...item})
    .then((res)=>{
        console.log(res)
        console.log(res)
return res;
    })
    .then((res)=>{
        if(res.data!='' || res.data!=null){
localStorage.setItem('subscribe',true)
            dispatch({
                type:"SUBSCRIPTION",
                payload: res.data,
            })
        }
    })
    .catch((res)=>{
        console.log(res);
    })
}