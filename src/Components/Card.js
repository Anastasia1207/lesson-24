import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Brushes1 from '../Assets/Img/Brushes1.jpg';
import Paints2 from '../Assets/Img/Paints2.jpg';
import Easel from '../Assets/Img/Easel.jpg';

function Card() {

    return (
        <div className="container">
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Card</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <h4>Card</h4>
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
                    {/* <li class="nav-item">
    <NavLink className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</NavLink>
  </li> */}
                </ul>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th >Products</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: 'auto' }}>
                                        <img src={Brushes1} className="card-img-top" alt="Pattern one" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <NavLink style={{ textDecoration: 'none' }} to="/category1">Brushes Set</NavLink>
                                        </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>

                            </div></td>
                            <td><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            <td>9.99 EUR</td>
                            <td><button type="button" class="btn ">&#128465;&nbsp;</button></td>
                        </tr>
                        <tr>
                            <td><div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: 'auto' }}>
                                        <img src={Paints2} className="card-img-top" alt="Pattern one" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <NavLink style={{ textDecoration: 'none' }} to="/category1">Paints Set</NavLink>
                                        </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>

                            </div></td>
                            <td><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            <td>12.75 EUR</td>
                            <td><button type="button" class="btn ">&#128465;&nbsp;</button></td>
                        </tr>
                        <tr>
                            <td><div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ height: '50', width: '80' }}>
                                        <img src={Easel} className="card-img-top" alt="Pattern one" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body" >
                                        <h5 className="card-title">
                                            <NavLink style={{ textDecoration: 'none' }} to="/category1">Easel</NavLink>
                                        </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>

                            </div></td>
                            <td ><input type="number" value="1" min="0" max="100" stap="5" /></td>
                            <td>20 EUR</td>

                            <td><button type="button" class="btn ">&#128465;&nbsp;</button></td>

                        </tr>
                    </tbody>
                </Table>






            </div>
        </div>

    )
}

export default Card;