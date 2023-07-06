import Carousel from 'react-bootstrap/Carousel';
import {Image} from '@chakra-ui/react'

export default function Crousel({ image }) {
    return (
        <Carousel fade>
            {
                image.map((imgx,i) => {
                    return (<Carousel.Item key={i}>
                        <Image
                            className="d-block w-100"
                            height={["50vh","100vh"]}
                            src={imgx}
                        />
                    </Carousel.Item>)
                })
            }
        </Carousel>
    )
}
