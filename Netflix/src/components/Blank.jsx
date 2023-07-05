import {useEffect} from 'react'
import {SubscribePlan} from '../store/middleware'
import { useDispatch } from 'react-redux';

export default function Blank() {
    const  dispatch = useDispatch();
let mail=localStorage.getItem('email');
    useEffect(()=>{
        SubscribePlan({email:mail},dispatch);
    },[]);

  return (
    <>
    </>
  )
}
