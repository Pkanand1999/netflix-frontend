import axios from 'axios'



export function hollywoodMovie(dispatch){
    axios.get(`http://localhost:4002/netflix/v2/hollywood`)
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
    axios.get(`http://localhost:4002/netflix/v2/bollywood`)
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
    axios.get(`http://localhost:4002/netflix/v2/cartoon`)
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
// export function indianWeb(dispatch){

// }
// export function tvShows(dispatch){

// }
// export function EnglishSeries(dispatch){

// }