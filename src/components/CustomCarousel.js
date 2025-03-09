import { Carousel } from 'react-bootstrap';

const CustomCarousel = ({ images }) => {
    return (
        <div className="flex justify-center items-center my-6">
            <div className="w-full"> {/* Adjust width as needed */}
                <Carousel data-bs-theme="dark" interval={null}>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-full"
                                src={image}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CustomCarousel;
