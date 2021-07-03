import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';




function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark border-right">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " to="/">ART Origin</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item navbar-right">
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories3">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/card">Card</NavLink>
                            </li>
                            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/Categories3">Categories3</NavLink>
        </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;