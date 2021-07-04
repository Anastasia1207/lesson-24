import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';

import Brushes1 from '../Assets/Img/Brushes1.jpg';

import fox1 from '../Assets/Img/Fox1.jpg';
import fox2 from '../Assets/Img/Fox2.jpg';
import fox3 from '../Assets/Img/Fox3.jpg';
import fox4 from '../Assets/Img/Fox4.jpg';
import fox5 from '../Assets/Img/Fox5.jpg';
import fox6 from '../Assets/Img/Fox6.jpg';

function Product1() {
    const [mainImg, setMainImg] = useState(Brushes1)

    const changeMainImg = (e) => {
        setMainImg(e.target.src);
    }

    return (
        <div className="container mb-5">
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
                <div className="col-4">
                    <h4>Product 1</h4>
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
                        <div className="row mt-3">
                            <div className="col"><p style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>9.99 EUR</p></div>
                            <div className="col text-end">
                                <button className="btn btn-outline-dark">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).</p>
                        <p>Twelve species belong to the monophyletic "true foxes" group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox.</p>
                        <p>Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies.[2] The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.</p>
                        <p><a href="https://en.wikipedia.org/wiki/Fox">Read more</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product1;