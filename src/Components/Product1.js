import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import './Style/Lightbox.css';

import stars from '../Assets/Img/stars.png';

function Product1() {
    const [mainImg, setMainImg] = useState("https://i.pinimg.com/originals/5a/f0/0b/5af00b162c74fc07ffc96615cb9f728f.jpg");
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

            {/* ALERT */}
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
                                    <img src="https://i.pinimg.com/originals/5a/f0/0b/5af00b162c74fc07ffc96615cb9f728f.jpg" className="img-fluid" alt="Escoda brushes set" />
                                </div>
                                <div className="col">
                                    <p></p>
                                    <br />
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
            {/* ALERT */}

            {/* BREADCRUMB */}
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/categories3">Categories</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/category1">Brushes and Painting Tools</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Tajmyr Sable Brushes</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            {/* BREADCRUMB */}

            {/* IMAGES */}
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col mb-2 px-1">
                            <a href="#lightbox-image-1">
                                <img src={mainImg} alt={'main foto'} className="img-fluid" />
                            </a>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col px-1">

                            <img src="https://i.pinimg.com/originals/5a/f0/0b/5af00b162c74fc07ffc96615cb9f728f.jpg" alt={'fox1'} className="img-fluid" onClick={changeMainImg} />

                        </div>
                        <div className="col px-1">
                            <img src="https://media.jacksonsart.com/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/B/R/BRS121410.JPG" alt={'fox2'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src="https://i5.walmartimages.com/asr/28618caf-a053-4b28-93d5-b776c0e6f498_1.0b1804ff6d82571178beeff4dc3f51ef.jpeg" alt={'fox3'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col px-1">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/513jfDhW27L._SL1000_.jpg" alt={'fox4'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src="https://artwhale.ph/wp-content/uploads/2015/08/Escoda-Reserva-Travel-Brush-Set.jpg" alt={'fox5'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                        <div className="col px-1">
                            <img src="https://images0.greatart.co.uk/out/pictures/generated/1500_1500/pboxx-pixelboxx-2444430/Escoda+Grafilo+Kolinsky+Red+Sable+Round+Brushes+Series+1230%2C+20%2C+14.10.jpg" alt={'fox6'} className="img-fluid" onClick={changeMainImg} />
                        </div>
                    </div>
                    {/* IMAGES */}


                    {/* LIGHTBOX */}
                    <div class="gallery-lightboxes">

                        <div class="image-lightbox" id="lightbox-image-1">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-6" class="arrow-left"></a>
                                <a href="#lightbox-image-2" class="arrow-right"></a>
                                <img src="https://i.pinimg.com/originals/5a/f0/0b/5af00b162c74fc07ffc96615cb9f728f.jpg" alt="" />
                                <div class="image-title">Set of 6, Short Handle</div>
                            </div>
                        </div>

                        <div class="image-lightbox" id="lightbox-image-2">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-1" class="arrow-left"></a>
                                <a href="#lightbox-image-3" class="arrow-right"></a>
                                <img src="https://media.jacksonsart.com/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/B/R/BRS121410.JPG" alt="" />
                                <div class="image-title">Pointed Round, Short Handle, Size 10</div>
                            </div>
                        </div>

                        <div class="image-lightbox" id="lightbox-image-3">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-2" class="arrow-left"></a>
                                <a href="#lightbox-image-4" class="arrow-right"></a>
                                <img src="https://i5.walmartimages.com/asr/28618caf-a053-4b28-93d5-b776c0e6f498_1.0b1804ff6d82571178beeff4dc3f51ef.jpeg" alt="" />
                                <div class="image-title">Pocket Round, Short Handle, Size 12</div>
                            </div>
                        </div>

                        <div class="image-lightbox" id="lightbox-image-4">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-3" class="arrow-left"></a>
                                <a href="#lightbox-image-5" class="arrow-right"></a>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/513jfDhW27L._SL1000_.jpg" alt="" />
                                <div class="image-title">Pocket Round, Short Handle, Size 4</div>
                            </div>
                        </div>

                        <div class="image-lightbox" id="lightbox-image-5">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-4" class="arrow-left"></a>
                                <a href="#lightbox-image-6" class="arrow-right"></a>
                                <img src="https://artwhale.ph/wp-content/uploads/2015/08/Escoda-Reserva-Travel-Brush-Set.jpg" alt="" />
                                <div class="image-title">Travel Brush Set</div>
                            </div>
                        </div>

                        <div class="image-lightbox" id="lightbox-image-6">
                            <div class="image-lightbox-wrapper">
                                <a href="#" class="close"></a>
                                <a href="#lightbox-image-5" class="arrow-left"></a>
                                <a href="#lightbox-image-1" class="arrow-right"></a>
                                <img src="https://images0.greatart.co.uk/out/pictures/generated/1500_1500/pboxx-pixelboxx-2444430/Escoda+Grafilo+Kolinsky+Red+Sable+Round+Brushes+Series+1230%2C+20%2C+14.10.jpg" alt="" />
                                <div class="image-title">Bright, Short Handle, Size 20</div>
                            </div>
                        </div>
                    </div>
                    {/* LIGHTBOX */}
                </div>

                {/* DESCRIPTION */}
                <div className="col-9">
                    <h4>Escoda Reserva Kolinsky-Tajmyr Sable Brushes</h4>
                    <small>Escoda is a registered trademark</small>
                    <p></p>
                    <p><img width="150px" src={stars} alt="Rating 4.5" /> <small className="text-secondary">168 reviews | Ask Question</small></p>

                    <p></p>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>68.00 EUR</p>

                    <p>Named after the exact location in Siberia where Escoda sources its Kolinsky-Tajmyr Sable, Reserva Series Brushes are crafted using only the tail hairs from the male Kolinsky — renowned for their springiness and capacity to retain liquids. Selection of fine materials, as well as Escoda's unique "curing" process, results in a watercolor brush that many artists consider to be perhaps the finest in the world. Following a 75-year tradition, these exceptional brushes are crafted by hand to offer the finest points and sharpest edges available. Each is produced with a perfectly balanced, lacquered wood handle and a nickel-plated ferrule.</p>
                    <p><b>Round, Set of 6</b> - Six-piece Series 1212 set, ideal for the watercolor painter, includes round brushes in sizes 0, 2, 4, 6, 8, 10, with a gold-plated ferrule, and the finest Kolinsky sable hair available.</p>
                    <p><b>Pocket Round, Short Handle, Size 2</b> - Pop this clever little Escoda travel brush into a pocket or plein air box. It's ready for the road at a moment's notice! Hidden within its golden chamber resides a regular length, pure Escoda Kolinsky-Tajmyr Kolinsky Sable Pointed Round brush.</p>
                    <p><b>Pocket Round, Short Handle, Size 4</b> - Pop this clever little Escoda travel brush into a pocket or plein air box. It's ready for the road at a moment's notice! Hidden within its golden chamber resides a regular length, pure Escoda Kolinsky-Tajmyr Kolinsky Sable Pointed Round brush.</p>
                    <button className="btn btn-danger" style={{ background: 'darkred', width: '200px' }} onClick={enableAlert}>Add to cart</button>
                </div>
                {/* DESCRIPTION */}

            </div>
        </div>
    )
}

export default Product1;