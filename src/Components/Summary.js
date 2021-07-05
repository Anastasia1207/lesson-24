import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Brushes2 from '../Assets/Img/Brushes2.jpg';
import Paints2 from '../Assets/Img/Paints2.jpg';
import Easel from '../Assets/Img/Easel.jpg';

function Summary() {

    return (
        <div className="container">
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/cart">Cart</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Products</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <h4>Summary</h4>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/cart">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/adress">Adress</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/summary">Summary</NavLink>
                    </li>
                </ul>

                <div className="row"> 
                <div className="col my-2" style={{ paddingTop: "40px"}}>
<h4>Shipping Adress</h4>
<p style={{margin: "0"}}>John Doe</p>
<p style={{margin: "0"}}>Brivibas street 23</p>
<p style={{margin: "0"}}>Riga,</p>
<p style={{margin: "0"}}>Latvia,</p>
<p >LV-1011</p>
<h4>Billing Adress</h4>
<p style={{margin: "0"}}> John Doe</p>
<p style={{margin: "0"}}>Tallina street 45</p>
<p style={{margin: "0"}}>Riga,</p>
<p style={{margin: "0"}}>Latvia,</p>
<p style={{margin: "0"}}>LV-1008</p>
                </div>
                <div className="col-10 my-6 ">
                <Table  hover size="sm" >
                    <thead>
                       
                        
                            <th><h4 style={{ textAlign: "center"}}>Products</h4></th>
                         
                            <th><h4 style={{ textAlign: "center"}}>Qty</h4></th>

                            <th><h4 style={{ textAlign: "center"}}>Price</h4></th>
                            <th><h4 style={{ textAlign: "center", padding: "0px 20px"}}>Total</h4></th>
                          
                     
                    </thead>
                    <tbody>
                        <tr>
                            <td> <div className="row">
                                <div className="col-md-3">
                                    <div className="card" style={{ width: '50%' }}>
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

                            </div></td>
                            <td style={{ paddingTop: "40px", paddingLeft: "20px"}}><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>9.99 EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn ">&#128465;</button></td>
                        </tr>
                        <tr>
                            <td><div className="row">
                                <div className="col-md-3">
                                    <div className="card" style={{ width: '50%' }}>
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
                            <td style={{ paddingTop: "40px", paddingLeft: "20px"}}><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>12.75 EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn ">&#128465;</button></td>
                        </tr>
                        <tr>
                            <td><div className="row">
                                <div className="col-md-3">
                                    <div className="card" style={{ width: '50%' }}>
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
                            <td style={{ paddingTop: "40px", paddingLeft: "20px"}} ><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            <td style={{ paddingTop: "40px", textAlign: "center"}}>20 EUR</td>
                            <td><button type="button" style={{ padding: "38%"}} class="btn ">&#128465;</button></td>


                        </tr>
                    </tbody>
                </Table>
                <div className="row">
                <div className="col-sm-8">
                </div>
          <div className="col-md-2">
              <h2>Total:</h2>
          </div>
          </div>
                    </div>
                </div>




            </div>
        </div>

    )
}

export default Summary;