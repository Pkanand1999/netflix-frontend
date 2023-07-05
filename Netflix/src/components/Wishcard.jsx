import {useState} from 'react'
import {MinusIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { playthis } from '../store/middleware';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkwishlist } from '../store/middleware';


export default function Wishard({list}) {
const [hover,setHover]=useState(false);
const navigate=useNavigate();
const dispatch=useDispatch();
const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  function playMovie(movieId){
playthis(movieId,dispatch)
navigate("/player")
  }


  

  function removewishlist(item){
    delete item._id;
    let user=localStorage.getItem("userId");
    let data={...item,userId:user}
    checkwishlist(data,dispatch)
alert("Remove from wishlist")
  }

    return (
        <div   onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
  >
            {!hover && <img src={list.url}  />}
            {hover && <span style={{display:"flex",justifyContent:"right",gap:"10px",color:"white"}}><MinusIcon onClick={()=>removewishlist(list)} /><ArrowForwardIcon onClick={()=>playMovie(list.videoId)}/></span> }
            {hover && <iframe src={`https://www.youtube.com/embed/${list.videoId}?autoplay=`} style={{width:"100%"}}/>}
        </div>
    )
}
