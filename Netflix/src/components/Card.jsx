import {useState} from 'react'
import {AddIcon,ArrowForwardIcon} from '@chakra-ui/icons'

export default function Card({ list}) {
const [hover,setHover]=useState(false);

const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

    return (
        <div   onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
  >
            {!hover && <img src={list.url}  />}
            {hover && <span style={{display:"flex",justifyContent:"right",gap:"10px"}}><AddIcon /><ArrowForwardIcon/></span> }
            {hover && <iframe src={`https://www.youtube.com/embed/${list.videoId}?autoplay=`} style={{width:"100%"}}/>}
        </div>
    )
}
