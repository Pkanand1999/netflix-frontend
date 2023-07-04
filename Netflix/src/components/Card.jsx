import {useState} from 'react'
import {AddIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { playthis } from '../store/middleware';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkwishlist } from '../store/middleware';


export default function Card({list}) {
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
  let wishItem = JSON.parse(localStorage.getItem("wishlist")) || [];

  function addwishlist(item){

    const isObjectPresent = wishItem.some(ele => {
      return ele.videoId === item.videoId;
    });

    if(isObjectPresent === true){
      alert("already in wishlist");
    }
    if(isObjectPresent === false){
      wishItem.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishItem));
      delete item._id;
      let user=localStorage.getItem("userId");
      let data={...item,userId:user}
      checkwishlist(data,dispatch)
  alert("added to wishlist")
    }
    
  }

    return (
        <div   onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
  >
            {!hover && <img src={list.url}  />}
            {hover && <span style={{display:"flex",justifyContent:"right",gap:"10px"}}><AddIcon onClick={()=>addwishlist(list)} /><ArrowForwardIcon onClick={()=>playMovie(list.videoId)}/></span> }
            {hover && <iframe src={`https://www.youtube.com/embed/${list.videoId}?autoplay=`} style={{width:"100%"}}/>}
        </div>
    )
}
