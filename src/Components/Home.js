import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import React from 'react';

import pattern1 from '../Assets/Img/pattern1.jpg';
import pattern2 from '../Assets/Img/pattern2.jpg';
import pattern3 from '../Assets/Img/pattern3.jpg';

import Pencils from '../Assets/Img/Pencils.jpg';
import Brushes from '../Assets/Img/Brushes.jpg';
import Paint from '../Assets/Img/Paint.jpg';

function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-3 pt-4 pb-2 text-center" style={{background: 'marbel'}}>
                    <p style={{fontSize: '30px', lineHeight: '14px'}}><b>The Best Art Supplies at the Best Prices!</b></p>
                    <p style={{lineHeight: '14px', fontSize:'14px'}}>Find all your art supply needs in one place! Shop more than 90,000 art supplies online, including the best selection of painting supplies, drawing supplies, and more.</p>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern1}
                                alt="Pattern one"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern2}
                                alt="Pattern two"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={pattern3}
                                alt="Pattern three"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h4><NavLink to="/categories3">Browse Categories</NavLink></h4>
                </div>
            </div>
            <div className="row">
                <div className="col my-3">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes} className="card-img-top" alt="Pattern one" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Brushes and Painting Tools</NavLink>
                            </h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={Pencils} className="card-img-top" alt="Pattern two" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/">Illustration and Drawing Supplies</NavLink>
                            </h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Paint} className="card-img-top" alt="Pattern three" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/Categories3">Paint and Mediums</NavLink>
                            </h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;