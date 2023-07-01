
import { onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Netflix() {
  const navigate=useNavigate();
  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (!currentUser) navigate("/login");
  // });


  return (
    <Container>
    <Navbar  />
    <div className="hero">
      <img
        src="https://images.ottplay.com/articles/2021q3/Lucifer_season_6_pos_OTTplay_news_cover_image_1_65.jpeg?impolicy=ottplay-20210210&width=1200&height=675"
        alt="background"
        className="background-image"
      />
      <div className="container">
        <div className="logo">
          <img src="" alt="Movie Logo" />
        </div>
        <div className="buttons flex">
          <button
            onClick={() => navigate("/player")}
            className="flex j-center a-center"
          >
            <FaPlay />
            Play
          </button>
          <button className="flex j-center a-center">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  </Container>
  )
}


const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;