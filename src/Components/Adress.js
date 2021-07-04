import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Adress() {

    return (
        <div className="container">
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
                        <NavLink className="nav-link" aria-current="page" to="/card">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/adress">Adress</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/summary">Summary</NavLink>
                    </li>
                    {/* <li class="nav-item">
    <NavLink className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</NavLink>
  </li> */}
                </ul>


            </div>
        </div>

    )
}

export default Adress;