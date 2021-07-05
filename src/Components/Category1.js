import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Brushes1 from '../Assets/Img/Brushes1.jpg';

function Category1() {

    return (
        <div className="container">
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/categories3">Categories</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brushes and Painting Tools</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4>Brushes and Painting Tools</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-4 mt-3">
                    <img src={Brushes1} alt={'main foto'} className="img-fluid" />
                </div>
                <div className="col-8 mt-3">
                    <p>ART Origin offers one of the largest selections of artist paint brushes available, for every type of media and every kind of artmaking. Our extensive range of brush fibers (both natural paint brushes and synthetic paint brushes), brush shapes, and sizes gives artists the best choice for their style of artmaking. From high-quality oil brushes, acrylic brushes, and watercolor brushes, to craft and foam brushes for home décor or decorative use, to makeup brushes for theater, cosplay, or personal use, ART Origin offers the widest selection and the best prices.</p>
                    <p>Because ART Origin sources thousands of artist brushes from around the world, no other art supply company maintains such a huge inventory and selection. Every brush we carry is stored in our climate-controlled facility for protection from dust, humidity, and temperature fluctuations. The same care is taken with our art painting tools. Whether you're purchasing a high-quality artist paint brush such as a handmade Siberian Kolinsky watercolor brush costing hundreds of dollars, a canister of affordable nylon paint brushes for a kindergarten class, or an eco-friendly brush cleaner, you get the same great service from ART Origin.</p>
                </div>
            </div>
            <div className="row">
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/4RIn6NXQKUACkBAxiDuR2n/a9634cfac64dbe02ec25e0e3d26c1a7f/76279-1001-1-4ww.jpg" className="card-img-top" alt="Pattern three" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 1</NavLink>
                            </h6>
                            <p className="card-text">9.78 EUR</p>
                        </div>
                    </div>
                </div>

                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg" className="card-img-top" alt="Pattern two" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 2</NavLink>
                            </h6>
                            <p className="card-text">3.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/5GdFeEcBwkDaqpHfcBp2ES/2670f3e31b032cc4cf79aeaeb619a279/04313-1001-M-4ww.jpg" className="card-img-top" alt="Pattern one" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 3</NavLink>
                            </h6>
                            <p className="card-text">68.00 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/1hzXOP9hV2K3fFQqspS1KS/b0edf9061117a63e7aff9083424e6757/06280-1309-1-4ww.jpg" className="card-img-top" alt="Pattern three" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 4</NavLink>
                            </h6>
                            <p className="card-text">12.99 EUR</p>
                        </div>
                    </div>
                </div>

                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/SxodAYb79hQ8V0LJnTS7J/f843cc904a01f073698c353dceda5b60/09165-1059-2-4ww.jpg" className="card-img-top" alt="Pattern three" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 5</NavLink>
                            </h6>
                            <p className="card-text">7.20 EUR</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/26PKH2SIYIr2g8kgcHqgAC/10f5f2fe229a65d1f2f629fdceb34e20/09379-GROUP-4ww.jpg" className="card-img-top" alt="Pattern two" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 6</NavLink>
                            </h6>
                            <p className="card-text">6.90 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/65nP1ADkbN65oH5XYbWPpi/5769224e2b4aee65428e15a6e2ce7c6a/06280-1029-4ww.jpg" className="card-img-top" alt="Pattern two" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 7</NavLink>
                            </h6>
                            <p className="card-text">11.89 EUR</p>
                        </div>
                    </div>
                </div>

                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/Nu0NDsCQChLN4MdVHo0cn/b6577ec36034cb036ecb0fae003d03f3/05442-Group-4ww.jpg" className="card-img-top" alt="Pattern three" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 8</NavLink>
                            </h6>
                            <p className="card-text">12.45 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/7cNVb10Mb2od3qe1PMF0Ip/11212112e800ce5776483255c516912b/05891-1039-1-4ww.jpg" className="card-img-top" alt="Pattern two" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 9</NavLink>
                            </h6>
                            <p className="card-text">50.50 EUR</p>
                        </div>
                    </div>
                </div>
                <div className="col my-3 text-center">
                    <div className="card" style={{ width: 'auto' }}>
                        <NavLink to="/product1">
                            <img src="https://images.ctfassets.net/f1fikihmjtrp/2T59NarmrAeiDChO665Roo/04d5bb410edc9a33bcb48f82504185e1/05985-1049-M-4ww.jpg" className="card-img-top" alt="Pattern one" />
                        </NavLink>
                        <div className="card-body">
                            <h6 className="card-title">
                                <NavLink to="/product1">Product 10</NavLink>
                            </h6>
                            <p className="card-text">9.50 EUR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category1;