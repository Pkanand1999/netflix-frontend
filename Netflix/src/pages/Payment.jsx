import Plan from "../components/Plan"
import Navbar from "../components/Navbar"
import { useDispatch } from "react-redux";
import { useState } from 'react'
import PaymentCard from "../components/PaymentCard";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Otp from "../components/Otp";
import DonePayment from '../components/DonePayment'
export default function Payment() {
    const [plan, setPlan] = useState(true);
    const [card, setCard] = useState(false);
    const [otp, setOtp] = useState(false);
    const [pin, setPin] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
    });
    function buy(e) {
        dispatch({
            type: 'PRICE',
            payload: e,
        })
        setPlan(false)
        setCard(true)
    }
    function cardDetail() {
        setCard(false);
        setOtp(true);
    }
    function getpin(e){
        if(e=="1234"){
            setTimeout(()=>{

                setOtp(false);
                setPin(true);
                console.log(e)
            },1500)
        }
    }

    return (
        <div>
            <Navbar />
            {plan && <Plan buy={buy} />}
            {card && <PaymentCard cardDetail={cardDetail} />}
            {otp && <Otp getpin={getpin}/>}
            {pin &&  <DonePayment/>}
        </div>
    )
}
