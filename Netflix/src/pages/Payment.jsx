import Plan from "../components/Plan"
import Navbar from "../components/Navbar"
import { useDispatch } from "react-redux";
import {useState} from 'react'

export default function Payment() {
    const[plan,setPlan]=useState(true);
    const[card,setCard]=useState(false);
    const dispatch=useDispatch();
    function buy(e){
        dispatch({
            type:'PRICE',
            payload:e,
        })
        setPlan(false)
        setCard(true)
    }

    return (
        <div>
            <Navbar />
            {plan && <Plan buy={buy}/>}
        </div>
    )
}
