

import {useState} from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { userid } from '../store/middleware';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const dispatch=useDispatch();

  const handleLogin = async () => {
    try {
      let user=await signInWithEmailAndPassword(firebaseAuth, email, password);
      localStorage.setItem('userId',user._tokenResponse.localId)
      userid(user._tokenResponse.localId,dispatch)
    } catch (error) {
      console.log(error.code);
      alert(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  function signup(){
    navigate("/signup")
  }

  return (
    <Container>
      <Background />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                autoComplete='off'
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                autoComplete='off'
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Log In</button>
            </div>
            <div><span style={{color:"grey", fontSize:"1.3rem",}}>New to Netflix?</span>
            <span style={{fontWeight:"600", fontSize:"1rem", cursor:"pointer", textDecoration:"underline"}} onClick={signup}> Sign up now.</span></div>
          <div style={{margin:"0.4rem 2.3rem 2.3rem 2.3rem",textAlign:"center"}}>This page is protected by Google reCAPTCHA to ensure you are not a bot. <span style={{color:"#0071c6"}}>Learn more.</span></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right ,rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.5));
    height: 100vh;
    width: 100vw;
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 20rem;
            color: black;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;
