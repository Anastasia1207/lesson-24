import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React from "react";
import { Link, NavLink } from 'react-router-dom';


function Categories3() {

    return (
   
<div className="container">
<div className="row">
     
     
      
          <Breadcrumb >
  <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Category</Breadcrumb.Item>
</Breadcrumb>

</div>
        </div>
    )
}

export default Categories3;