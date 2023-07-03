import Navbar from "../components/Navbar";
import {useState} from 'react'
import { onAuthStateChanged} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

export default function MyList() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate=useNavigate();
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
      });
      


  return (
    <div style={{background:"black",height:"100vh", width:"100vw"}}>
        <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
