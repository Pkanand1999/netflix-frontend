import Navbar from "../components/Navbar";
import {useState} from 'react'

export default function MyList() {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };


  return (
    <div style={{background:"black",height:"100vh", width:"100vw"}}>
        <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
