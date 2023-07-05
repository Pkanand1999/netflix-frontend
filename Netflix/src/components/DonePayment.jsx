import { useNavigate } from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux";
import { Subscribe } from "../store/middleware";

export default function DonePayment() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data=useSelector((e)=>{
      return e.price;
    })
    setTimeout(()=>{
        navigate("/")
        let email=localStorage.getItem("email");
        Subscribe({email:email,subscription:`${data}/monthiy`},dispatch)
    },6000)
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="" />
    </div>
  )
}
