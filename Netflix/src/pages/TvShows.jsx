import Navbar from "../components/Navbar";
import {useState,useEffect} from 'react'
import Crousel from "../components/Crousel";
import { useDispatch ,useSelector} from "react-redux";
import { indianWeb,tvShows,EnglishSeries } from "../store/middleware";
import Slider from "react-slick";
import Card from "../components/Card";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { onAuthStateChanged} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

let images=[
    "https://e1.pxfuel.com/desktop-wallpaper/132/405/desktop-wallpaper-money-heist-season-5-volume-2-review-fans-cry-happy-tears-after-the-last-showdown-on-netflix-s-hit-spanish-drama.jpg",
    "https://wallpapers.com/images/high/amazing-poster-of-lost-in-space-6u6gyqhbnu6su1tn.webp",
    "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/jamtara2.jpg"
]

export default function TvShows() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [image, setImage] = useState(images);  
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=useSelector((e)=>{
       return e
    })
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };

      useEffect(()=>{
        indianWeb(dispatch);
        tvShows(dispatch);
        EnglishSeries(dispatch);
     },[])

      const settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 6,
        speed: 500
      };


  return (
    <div style={{background:"black", width:"100vw",color:"white"}}>
        <Navbar isScrolled={isScrolled}/>
        <Crousel image={image} />
        <h4 style={{marginTop:"3rem"}}>Hollywood Movies</h4>
            <Slider {...settings} >
            {
                data.englishSeries.map((list,i)=>{
                   return  <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
                   </Slider>
            <h4 style={{marginTop:"3rem"}}>Bollywood Movies</h4>
            
            <Slider {...settings} >
            {
                data.indianWebSeries.map((list,i)=>{
                   return <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
            </Slider>
            <h4 style={{marginTop:"3rem"}}>Cartoon Movies</h4>
            <Slider {...settings}>
            {
                data.tvShow.map((list,i)=>{
                    return  <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
            </Slider>
    </div>
  )
}
