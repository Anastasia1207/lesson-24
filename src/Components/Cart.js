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
    const [total1, setTotal1] = useState(9.99);
    const [total2, setTotal2] = useState(12.75);
    const [total3, setTotal3] = useState(20.01);
    const [total] = useState(total1 + total2 + total3);


    const inputValue = (event) => {
        console.log('test')
        const inputValue = event.target.value;
        setTotal1(total1 * inputValue);
    }

    const removeProduct = (event) => {
        event.target.closest('.productCart').remove();
      };

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
                        <tr className="productCart">
                            <td> <div className="row">
                                <div className="col-md-3">
                                    <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px"}}>
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
                            </td>
                            <td style={{ paddingTop: "40px", paddingLeft: "2%"}}>
                                <NumericInput value={1} min={1} onClick={inputValue}/>
                            </td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{product1} EUR</td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{total1} EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn" onChange={removeProduct}>&#128465;</button></td>
                        </tr>
                        <tr className="productCart">
                            <td><div className="row">
                                <div className="col-md-3">
                                    <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px",}}>
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

                            </div></td>
                            <td style={{ paddingTop: "40px", paddingLeft: "2%"}}>
                                <NumericInput value={1} min={1} onClick={inputValue}/>  
                            </td>
                            
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{product2} EUR</td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{total2} EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn " onClick={removeProduct}>&#128465;</button></td>
                        </tr>
                        <tr className="productCart">
                            <td><div className="row">
                                <div className="col-md-3">
                                    <div style={{ width: '100%', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px",}}>
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
                            <td style={{ paddingTop: "40px", paddingLeft: "2%"}} >
                                <NumericInput value={1} min={1} onClick={inputValue}/>
                            </td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{product3} EUR</td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>{total3} EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn " onClick={removeProduct}>&#128465;</button></td>


                        </tr>
                    </tbody>
                </Table>

                <div className="row">
                <div className="col-sm-8">
                </div>
          <div className="col-md-2">
              <h2>Total: {total} EUR</h2>
          </div>
          </div>




            </div>
        </div>

    )
}

export default Cart;