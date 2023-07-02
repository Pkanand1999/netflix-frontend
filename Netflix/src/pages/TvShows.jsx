import Navbar from "../components/Navbar";
import {useState} from 'react'
import Crousel from "../components/Crousel";

let images=[
    "https://e1.pxfuel.com/desktop-wallpaper/132/405/desktop-wallpaper-money-heist-season-5-volume-2-review-fans-cry-happy-tears-after-the-last-showdown-on-netflix-s-hit-spanish-drama.jpg",
    "https://wallpapers.com/images/high/amazing-poster-of-lost-in-space-6u6gyqhbnu6su1tn.webp",
    "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/jamtara2.jpg"
]

export default function TvShows() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [image, setImage] = useState(images);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };


  return (
    <div style={{background:"black", width:"100vw"}}>
        <Navbar isScrolled={isScrolled}/>
        <Crousel image={image} />
    </div>
  )
}
