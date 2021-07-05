import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Table from 'react-bootstrap/Table';

function Adress() {

    return (
        <div className="container" >
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/cart">Cart</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Address</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <h4>Adress</h4>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/cart">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/adress">Adress</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/summary">Summary</NavLink>
                    </li>

                </ul>
                <div className="col my-4">
                <Table className="table-default  table-table-sm"  hover size="sm">
     
                    <tbody>
                        <tr>
                        <div className="row">
                        <div className="col-md-4">

                                <div class="form-outline mb-5">
                            <label  style={{paddingLeft: "130px"}} class="form-label" for="form6Example7">Shipping Adress</label>
            <textarea style={{ marginLeft: "130px", height: "300px" }} class="form-control" id="form6Example7" rows="4"></textarea>
            

            
            </div>
          </div>
          


          <div className="col-md-4">
                                <div class="form-outline mb-5">
                            <label  style={{paddingLeft: "300px"}} class="form-label" for="form6Example7">Billing Adress</label>
            <textarea style={{  marginLeft: "300px", height: "300px"}} class="form-control" id="form6Example7" rows="4"></textarea>
    
            
            </div>
          </div>
          </div>
         

                            
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

    )
}

export default Adress;