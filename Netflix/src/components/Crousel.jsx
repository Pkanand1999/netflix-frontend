import Carousel from 'react-bootstrap/Carousel';

export default function Crousel({ image }) {
    return (
        <Carousel fade>
            {
                image.map((imgx) => {
                    return (<Carousel.Item>
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
