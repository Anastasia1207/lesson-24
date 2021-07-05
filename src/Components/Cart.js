import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';

import Brushes2 from '../Assets/Img/Brushes2.jpg';
import Paints2 from '../Assets/Img/Paints2.jpg';
import Easel from '../Assets/Img/Easel.jpg';

function Cart() {
    const [product1, setProduct1] = useState(9.99);
    const [product2, setProduct2] = useState(12.75);
    const [product3, setProduct3] = useState(20.01);
    const [total] = useState(product1 + product2 + product3);


    const deleteProduct = () => {
        // setProduct('');
    }

    const inputValue = (e) => {
        const howManyProducts = e.target.value;
        setProduct1(product1 * howManyProducts);
    }

    return (
        <div className="container" >
             {/* BREADCRUMB */}
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/cart">Cart</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Products</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            {/* NAVTABS */}
            <div className="row">
                <h4>Cart</h4>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/card">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/adress">Adress</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/summary">Summary</NavLink>
                    </li>
                </ul>

             {/* TABLE */}
                <Table  bordered hover size="sm" >
                    <thead>
                        <tr>
                        
                            <th><h4 style={{ textAlign: "center"}}>Products</h4></th>
                         
                            <th><h4 style={{ textAlign: "center"}}>Qty</h4></th>

                            <th><h4 style={{ textAlign: "center"}}>Price</h4></th>
                            <th><h4 style={{ textAlign: "center"}}>Total</h4></th>
                            <th><h4 style={{ textAlign: "center", padding: "0px 20px"}}></h4></th>
                          


                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px" }}>
                                            <img src={Brushes2} className="card-img-top" alt="Pattern one" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <NavLink style={{ textDecoration: 'none' }} to="/category1">Brushes Set</NavLink>
                                            </h5>
                                            <p className="card-text">A little bit of Lorem.</p>
                                        </div>
                                    </div>
                                </div>


                            </div></td>

                            </td>
                            <td style={{ paddingTop: "40px", paddingLeft: "2%" }}>
                                <NumericInput value="1" min="1" onChange={inputValue}/>
                            </td>
                            <td style={{ paddingTop: "40px", textAlign: "center" }}>{product1} EUR</td>
                            <td><button type="button" style={{ padding: "38%" }} class="btn" onClick={deleteProduct}>&#128465;</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", }}>
                                            <img src={Paints2} className="card-img-top" alt="Pattern one" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <NavLink style={{ textDecoration: 'none' }} to="/category1">Paints Set</NavLink>
                                            </h5>
                                            <p className="card-text">Some quick example text content.</p>
                                        </div>
                                    </div>

                                </div>

                            </div></td>
                            </tr>
                            <tr>
                            <td style={{ paddingTop: "40px", paddingLeft: "2%"}}><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>12.75 EUR</td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}></td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn ">&#128465;</button></td>

                                </div></td>
                             
                                <tr>
                            <td style={{ paddingTop: "40px", paddingLeft: "2%" }}>
                                <NumericInput value="1" min="1" />
                            </td>
                            <td style={{ paddingTop: "40px", textAlign: "center" }}>{product2} EUR</td>
                            <td><button type="button" style={{ padding: "38%" }} class="btn ">&#128465;</button></td>

                     
                        <tr>
                            <td><div className="row">
                                <div className="col-md-3">
                                    <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", }}>
                                        <img src={Easel} className="card-img-top" alt="Pattern one" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card-body" >
                                        <h5 className="card-title">
                                            <NavLink style={{ textDecoration: 'none' }} to="/category1">Easel</NavLink>
                                        </h5>
                                        <p className="card-text">Some text here.</p>
                                    </div>
                                </div>

                            </div></td>

                            <td style={{ paddingTop: "40px", paddingLeft: "2%"}} ><input type="number" value="1" min="0" max="100" stap="5" /></td>
                                 <NumericInput value="1" min="1" />
                            </td>
                            <td style={{ paddingTop: "40px", textAlign: "center" }} >{product3} EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn ">&#128465;</button></td>

                            <td style={{ paddingTop: "40px", paddingLeft: "2%" }} >
                         
                            <td><button type="button" style={{ padding: "38%" }} class="btn ">&#128465;</button></td>



                        </tr>
                    </tbody>
                </Table>

                <div className="row">
                    <div className="col-sm-8">
                    </div>
                    <div className="col-md-2">
                        <h2>Total: {total} €</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;