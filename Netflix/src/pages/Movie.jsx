
import Navbar from "../components/Navbar"
import { useState,useEffect } from 'react'
import Crousel from "../components/Crousel";
import { useDispatch ,useSelector} from "react-redux";
import { hollywoodMovie,bollywoodMovie,cartoonMovie } from "../store/middleware";
import Slider from "react-slick";
import Card from "../components/Card";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

let images = [
    "https://e1.pxfuel.com/desktop-wallpaper/528/531/desktop-wallpaper-1-pc-hollywood-movies-hollywood-movie-poster.jpg",
    "https://e0.pxfuel.com/wallpapers/267/497/desktop-wallpaper-movie-tv-series-posters-tv-series-hollywood.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/865/308/desktop-wallpaper-1680x1050-jack-the-giant-slayer-movie-poster-pc-and-hollywood-movies.jpg"
]

export default function Movie() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [image, setImage] = useState(images);
    const dispatch=useDispatch();
    const data=useSelector((e)=>{
       return e
    })
    console.log(data);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    useEffect(()=>{
       hollywoodMovie(dispatch);
       bollywoodMovie(dispatch);
       cartoonMovie(dispatch);
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
        <div style={{ background: "black", width: "100vw", color: "white" }}>
            <Navbar isScrolled={isScrolled} />
            <Crousel image={image} />
            <h4 style={{marginTop:"3rem"}}>Hollywood Movies</h4>
            <Slider {...settings} >
            {
                data.hollywood.map((list,i)=>{
                   return  <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
                   </Slider>
            <h4 style={{marginTop:"3rem"}}>Bollywood Movies</h4>
            
            <Slider {...settings} >
            {
                data.bollywood.map((list,i)=>{
                   return <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
            </Slider>
            <h4 style={{marginTop:"3rem"}}>Cartoon Movies</h4>
            <Slider {...settings}>
            {
                data.cartoon.map((list,i)=>{
                    return  <Card list={list} key={i} style={{border:"2px solid white"}}/>
                })
            }
            </Slider>

        </div>
    )
}


