

import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'



function Categories3() {

    return (
        <div className="container">
          <div className="breadcrumb">
          <Breadcrumb >
  <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Category</Breadcrumb.Item>
</Breadcrumb>
</div>
        </div>


    )
}

export default Categories3;