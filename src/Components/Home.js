import pattern1 from '../Assets/Img/pattern1.jpg';
import pattern2 from '../Assets/Img/pattern2.jpg';
import pattern3 from '../Assets/Img/pattern3.jpg';

import Carousel from 'react-bootstrap/Carousel';

function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern1}
                                alt="First slide"
                                height="300"
                            />

                            <Carousel.Caption>
                                {/* <h3>PreReact.com slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern2}
                                alt="Third slide"
                                height="300"
                            />

                            <Carousel.Caption>
                                {/* <h3>PreReact.com slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern3}
                                alt="Third slide"
                                height="300"
                            />

                            <Carousel.Caption>
                                {/* <h3>PreReact.com slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h4>Categories</h4>
                </div>
            </div>
        </div>
    )
}

export default Home;