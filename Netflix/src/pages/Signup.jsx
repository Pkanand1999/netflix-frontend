import styled from 'styled-components'
import Background from '../components/Background';
import Header from '../components/Header';
import "../styles.css"

export default function Signup() {
    return (
        <>
            <Container>
                <Background />
                <div className="content">
                <Header />
                <div className="a-center jcenter body flex column">
                    <div className="text flex column">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h4>Watch anywhere. Cancel anytime.</h4>
                        <h6>
                            Ready to watch? Enter your email to create or restart membership.
                        </h6>
                    </div>
                    <div className="form">
                        <input type='email' placeholder="Email Address" name="email" />
                        <input type='password' placeholder="Password" name="password" />
                        <button>Get Started</button>
                    </div>
                    <button>Log In</button>
                </div>
                </div>
            </Container>
        </>
    )
}


const Container = styled.div`

position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.78);
    height: 100%;
    width: 100%;
    display:grid;
    grid-template-rows: 10vh 85vh;
}

`;