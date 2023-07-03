import {useState} from 'react'
import {AddIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { playthis } from '../store/middleware';
import { useDispatch } from 'react-redux';

export default function Card({list}) {
const [hover,setHover]=useState(false);
const dispatch=useDispatch();
const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  function playMovie(movieId){
playthis(movieId,dispatch)
  }

    return (
        <div   onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
  >
            {!hover && <img src={list.url}  />}
            {hover && <span style={{display:"flex",justifyContent:"right",gap:"10px"}}><AddIcon /><ArrowForwardIcon onClick={()=>playMovie(list.videoId)}/></span> }
            {hover && <iframe src={`https://www.youtube.com/embed/${list.videoId}?autoplay=`} style={{width:"100%"}}/>}
        </div>
    )
}
