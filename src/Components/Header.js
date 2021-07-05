import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark border-right">
                <div className="container-fluid">
                    <NavLink style={{ fontFamily: "fantasy"}} className="navbar-brand " to="/">ART Origin</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item navbar-right">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories3">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;