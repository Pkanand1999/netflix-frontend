import styled from 'styled-components'
import Background from '../components/Background';
import Header from '../components/Header';

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { firebaseAuth } from "../utils/firebase-config";
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
      email: "",
      password: "",
    });
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
        alert(error)
      }
    };
  
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  
    return (
      <Container showPassword={showPassword}>
        <Background />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV shows and more.</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart membership.
              </p>
            </div>
            <div className="form">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="email"
                value={formValues.email}
                autoComplete='off'
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete='off'
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={formValues.password}
                />
              )}
              {!showPassword && (
                <button className='getStart' onClick={() => setShowPassword(formValues.email.length>9?true:alert("Please enter a valid email") )}>Get Started ›</button>
              )}
            </div>
            {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
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
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        width: 100%;
        h1 {
          padding: 0 15rem;
          font-size: 3rem;
          font-weight: 900;
          color:white;
        }
        p{
            font-size: 1.5rem;
            font-weight: 400;
            padding: 0 15rem;
            color:white;
        }
        p{
            font-size: 1.5rem;
            font-weight: 400;
            padding: 1rem;
            color:white;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 36%;
        gap:0.4rem;
        input {
            background-color:transparent;
            color: grey;
            border: .5px solid grey;
            padding: 1.2rem;
            font-size: 1.3rem;
            &:focus {
                outline: none ;
               color:white;
            }
            
        }
        .getStart {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.55rem;
        }
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
`;