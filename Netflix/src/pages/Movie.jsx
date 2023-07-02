
import Navbar from "../components/Navbar"
import { useState } from 'react'
import Crousel from "../components/Crousel";

let images = [
    "https://e1.pxfuel.com/desktop-wallpaper/528/531/desktop-wallpaper-1-pc-hollywood-movies-hollywood-movie-poster.jpg",
    "https://e0.pxfuel.com/wallpapers/267/497/desktop-wallpaper-movie-tv-series-posters-tv-series-hollywood.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/865/308/desktop-wallpaper-1680x1050-jack-the-giant-slayer-movie-poster-pc-and-hollywood-movies.jpg"
]

export default function Movie() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [image, setImage] = useState(images);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div style={{ background: "black", width: "100vw", color: "white" }}>
            <Navbar isScrolled={isScrolled} />
            <Crousel image={image} />

        </div>
    )
}
