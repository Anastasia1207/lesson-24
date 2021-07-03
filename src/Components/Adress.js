import { NavLink } from 'react-router-dom';


function Adress() {

    return (
        <div className="container">
            <div className="row">

           
        
          <h1>Adress</h1>
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