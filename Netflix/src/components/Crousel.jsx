import Carousel from 'react-bootstrap/Carousel';

export default function Crousel({ image }) {
    return (
        <Carousel fade>
            {
                image.map((imgx,i) => {
                    return (<Carousel.Item key={i}>
                        <img
                            className="d-block w-100"
                            style={{ height: "100vh" }}
                            src={imgx}
                        />
                    </Carousel.Item>)
                })
            }
        </Carousel>
    )
}
