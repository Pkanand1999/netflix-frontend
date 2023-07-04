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
    plan:[
        {heading:"Monthly price",basic:"₹ 159",standard:"₹ 199",premium:"₹ 249"},
        {heading:"HD available",basic:"×",standard:"✓",premium:"✓"},
        {heading:"Ultra HD available",basic:"×",standard:"×",premium:"✓"},
        {heading:"Screen you can watch on at same time",basic:"1",standard:"2",premium:"4"},
        {heading:"Watch on your Laptop, TV, Phone and Tablet",basic:"✓",standard:"✓",premium:"✓"},
        {heading:"Unlimited movies and TV shows",basic:"✓",standard:"✓",premium:"✓"},
        {heading:"Cancel any time",basic:"✓",standard:"✓",premium:"✓"},
        {heading:"First month free",basic:"✓",standard:"✓",premium:"✓"}
    ],
    price:0,

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
        case"PRICE":{
            return{
                ...state,
                price:action.payload,
            }
        }
        default:
            return state;
    }
}

export  {reducer};