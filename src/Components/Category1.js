import { NavLink } from 'react-router-dom';

import Brushes1 from '../Assets/Img/Brushes1.jpg';

function Category1() {

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <h4>Brushes and Painting Tools</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-4 mt-3">
                    <img src={Brushes1} alt={'main foto'} className="img-fluid" />
                </div>
                <div className="col-8 mt-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta, hic voluptatibus eligendi dignissimos corrupti nisi doloribus, eius exercitationem ut minus vitae ad fugiat tenetur numquam omnis aliquid? Illo, minima.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, vel. In eius, corporis non, ex repellat quaerat doloribus provident consequatur reprehenderit deleniti officiis placeat molestiae obcaecati quo temporibus dolores dolor!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, possimus maxime autem provident voluptatem quo nam sapiente aliquam quos quam corrupti nemo, ratione distinctio odio expedita dolor voluptatum iusto omnis?</p>
                </div>
            </div>
            <div className="row">
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern one" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern two" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern three" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern two" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern three" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern one" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern two" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern three" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern two" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes1} className="card-img-top" alt="Pattern three" />
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/category1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category1;