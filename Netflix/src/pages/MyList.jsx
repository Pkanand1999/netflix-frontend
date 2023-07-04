import Navbar from "../components/Navbar";
import {useState,useEffect} from 'react'
import { onAuthStateChanged} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getlist } from "../store/middleware";
import { SimpleGrid } from '@chakra-ui/react';
import Wishard from "../components/Wishcard";

export default function MyList() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data=useSelector((e)=>{
      return e.wishlist
    })
    if(data.length==0){
      navigate(-1)
    }
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
      });

      useEffect(()=>{
        let user=localStorage.getItem('userId')
        getlist({userId:user},dispatch)
      },[])
      


  return (
    <div style={{background:"black",height:"100vh", width:"100vw"}}>
        <Navbar isScrolled={isScrolled}/>
        {/* <div> */}
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4} paddingTop={24}>
     
          {
            data.map((list,i)=>{
              return <Wishard list={list} key={i} style={{border:"2px solid white"}}/>
            })
          }
           
    </SimpleGrid>
        {/* </div> */}
    </div>
  )
}
