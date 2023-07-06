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
    "https://wallpapers.com/images/high/amazing-poster-of-lost-in-space-6u6gyqhbnu6su1tn.webp",
    "https://c4.wallpaperflare.com/wallpaper/37/1008/892/the-vampire-diaries-tv-series-2009-2017-poster-fantasy-all-wallpaper-preview.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/026/693/455/large/nakul-anand-asur-poster-nakulanand.jpg?1589463625",
    "https://c4.wallpaperflare.com/wallpaper/713/48/9/the-witcher-the-witcher-tv-series-netflix-netflix-tv-series-poster-hd-wallpaper-preview.jpg"
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
        speed: 500,
        responsive:[
          {
              breakpoint: 1080,
              settings: {
                slidesToShow: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
              }
            }
      ]
      };


  return (
    <div style={{background:"black", width:"100vw",color:"white"}}>
        <Navbar isScrolled={isScrolled}/>
        <Crousel image={image} />
        <h4 style={{marginTop:"3rem",marginLeft:"20px"}}>WebSeries English</h4>
            <Slider {...settings} >
            {
                data.englishSeries.map((list,i)=>{
                   return  <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
                   </Slider>
            <h4 style={{marginTop:"3rem",marginLeft:"20px"}}>WebSeries Hindi</h4>
            
            <Slider {...settings} >
            {
                data.indianWebSeries.map((list,i)=>{
                   return <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
            </Slider>
            <h4 style={{marginTop:"3rem",marginLeft:"20px"}}>Tv Shows</h4>
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
