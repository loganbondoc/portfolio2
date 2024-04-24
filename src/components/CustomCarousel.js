import { Carousel } from 'react-bootstrap';
import doubleDiamond from '../images/memento/double_diamond.png';

const CustomCarousel = ({ images }) => {
    return (
        <div class = "centered-div-container">
            <Carousel data-bs-theme="dark" interval={null}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
        
    );
};

export default CustomCarousel;