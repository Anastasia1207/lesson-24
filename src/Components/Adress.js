import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Table from 'react-bootstrap/Table';

function Adress() {

    return (
        <div className="container"  style={{ paddingBottom: "90px" }}>
           {/* BREADCRUMB */}
            <div className="row">
                <div className="col my-4">
                    <Breadcrumb >
                        <Breadcrumb.Item><NavLink exact to="/">Home</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item><NavLink to="/cart">Cart</NavLink></Breadcrumb.Item>
                        <Breadcrumb.Item active>Address</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
           {/* TABS */}
            <div className="row">
                <h4>Cart</h4>
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
                <div className="row">
          <div className="col-sm-6">
                            <h4  style={{paddingTop: "20px", paddingLeft: "130px"}}>Shipping Adress</h4>
                            </div>
                            <div className="col-sm-6">
                            <h4  style={{paddingTop: "20px", paddingLeft: "90px"}}>Billing Adress</h4>
                            </div>
                            </div>
                <div className="col my-4">
                <Table className="table-default  table-table-sm"  hover size="sm">
     
                    <tbody>
                        <tr>
                        <div className="row">
                        <div className="col-md-4">

                                <div className="form-outline mb-6" style={{ paddingBottom: "10px", paddingTop: "10px" }}>
            <textarea style={{ marginLeft: "130px", height: "250px" }} class="form-control" id="form6Example7" rows="4"></textarea>
            

            
            </div>
          </div>
          


          <div className="col-md-4">
       
                            <div className="form-outline mb-6" style={{ paddingBottom: "10px", paddingTop: "10px" }}>
            <textarea style={{  marginLeft: "300px", height: "250px"}} class="form-control" id="form6Example7" rows="4"></textarea>
    
            
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
              <h2 >Total:</h2>
          </div>
          </div>

            </div>
        </div>
         </div>

    )
}

export default Adress;