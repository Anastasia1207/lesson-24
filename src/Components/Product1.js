import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import Brushes1 from '../Assets/Img/Brushes1.jpg';
import stars from '../Assets/Img/stars.png';

import fox2 from '../Assets/Img/Fox2.jpg';
import fox3 from '../Assets/Img/Fox3.jpg';
import fox4 from '../Assets/Img/Fox4.jpg';
import fox5 from '../Assets/Img/Fox5.jpg';
import fox6 from '../Assets/Img/Fox6.jpg';

function Product1() {
    const [mainImg, setMainImg] = useState(Brushes1);
    const [show, setShow] = useState(false);

    const changeMainImg = (e) => {
        setMainImg(e.target.src);
    }

    const enableAlert = () => {
        setShow(true)

    }

    const removeAlert = () => {
        setShow(false)
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <Alert show={show}>
                            <div className="coupon-poplyer-modal" style={{ position: 'fixed', inset: '0px', display: 'flex', flexDrection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.55) none repeat scroll 0% 0%', direction: 'ltr' }}>
                            </div>
                        </Alert>
                        <Alert show={show} variant="light" style={{ position: 'fixed', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '500px', maxHeight: '600px' }}>
                            <img onClick={removeAlert} src="https://ae01.alicdn.com/kf/H5545b1dae97243fba06c33bd33104b84G.png" style={{ zIndex: '0', width: '32px', height: '32px', position: 'absolute', top: '-16px', right: '-14px' }} alt='...' />
                            <Alert.Heading>1 item added to your cart</Alert.Heading>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    <img src="https://images.ctfassets.net/f1fikihmjtrp/1pOF3LdH1VITTygjVyI8ds/95c6aa2ca57827a0dac19a88ac1e6f4c/06651-0069-3ww-l.jpg" className="img-fluid" alt="Escoda brushes set" />
                                </div>
                                <div className="col">
                                    <p>Escoda Reserva Kolinsky-Tajmyr Sable Brushes</p>
                                    <p><b>68.00 EUR</b></p>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <NavLink to="/cart">
                                    <button className="btn btn-dark" style={{ fontSize: '12px', fontWeight: '700' }}>
                                        VIEW CART & CHECKOUT
                                    </button>
                                </NavLink>
                                &nbsp;
                                <NavLink to="/categories3">
                                    <button className="btn btn-outline-dark" style={{ fontSize: '12px', fontWeight: '700' }}>
                                        CONTINUE SHOPPING
                                    </button>
                                </NavLink>
                            </div>
                        </Alert>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/categories3">Categories</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/category1">Brushes and Painting Tools</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Product 1</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col mb-2 px-1">
                            <img src={mainImg} alt={'main foto'} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col px-1">
                            <img src={Brushes1} alt={'fox1'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src={fox2} alt={'fox2'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src={fox3} alt={'fox3'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col px-1">
                            <img src={fox4} alt={'fox4'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src={fox5} alt={'fox5'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src={fox6} alt={'fox6'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <h4>Escoda Reserva Kolinsky-Tajmyr Sable Brushes</h4>
                    <small>Escoda is a registered trademark</small>
                    <p></p>
                    <p><img width="150px" src={stars} alt="Rating 4.5" /> <small className="text-secondary">168 reviews | Ask Question</small></p>
                    
                    <p></p>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>68.00 EUR</p>

                    <p>Named after the exact location in Siberia where Escoda sources its Kolinsky-Tajmyr Sable, Reserva Series Brushes are crafted using only the tail hairs from the male Kolinsky — renowned for their springiness and capacity to retain liquids. Selection of fine materials, as well as Escoda's unique "curing" process, results in a watercolor brush that many artists consider to be perhaps the finest in the world. Following a 75-year tradition, these exceptional brushes are crafted by hand to offer the finest points and sharpest edges available. Each is produced with a perfectly balanced, lacquered wood handle and a nickel-plated ferrule.</p>
                    <p><b>Round, Set of 6</b> - Six-piece Series 1212 set, ideal for the watercolor painter, includes round brushes in sizes 0, 2, 4, 6, 8, 10, with a gold-plated ferrule, and the finest Kolinsky sable hair available.</p>
                    <button className="btn btn-danger" style={{ background: 'darkred', width: '200px' }} onClick={enableAlert}>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default Product1;