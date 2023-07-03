let initialState ={
    videoId: "ueMwVGBwqRo",
    userId:"",
    hollywood:[],
    bollywood:[],
    cartoon:[],
    indianWebSeries:[],
    tvShow:[],
    englishSeries:[],
}

const reducer=(state=initialState,action) =>{
    switch(action.type){
        case"SET_VIDEOID":{
            return{
                ...state,
                videoId: action.payload.videoId,
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
        default:
            return state;
    }
}

export  {reducer};