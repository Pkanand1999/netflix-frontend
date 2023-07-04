let initialState ={
    videoId: "ueMwVGBwqRo",
    userId: localStorage.getItem("userId") || "",
    hollywood:[],
    bollywood:[],
    cartoon:[],
    indianWebSeries:[],
    tvShow:[],
    englishSeries:[],
    wishlist:[],
}

const reducer=(state=initialState,action) =>{
    switch(action.type){
        case"VIDEO_ID":{
            return{
                ...state,
                videoId: action.payload,
            }
        }
        case"HOLLYWOOD_MOVIES":{
            return{
                ...state,
                hollywood: [...action.payload],
            }
        }
        case"BOLLYWOOD_MOVIES":{
            return{
                ...state,
                bollywood: [...action.payload],
            }
        }
        case"CARTOON_MOVIES":{
            return{
                ...state,
                cartoon: [...action.payload],
            }
        }
        case"INDIAN_WEB_SERIES":{
            return{
                ...state,
                indianWebSeries: [...action.payload],
            }
        }
        case"TV_SHOWS":{
            return{
                ...state,
                tvShow: [...action.payload],
            }
        }
        case"ENGLISH_WEB_SERIES":{
            return{
                ...state,
                englishSeries: [...action.payload],
            }
        }
        case"USER_ID":{
            return{
                ...state,
                userId: action.payload,
            }
        }
        case"WATCH_WISHLIST":{
            return{
                ...state,
                wishlist: [...action.payload],
            }
        }
        case"UPDATE_WISHLIST":{
            return{
                ...state,
                wishlist: [...action.payload],
            }
        }
        default:
            return state;
    }
}

export  {reducer};