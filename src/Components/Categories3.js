import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React from "react";
import { Link, NavLink } from 'react-router-dom';


import pattern1 from '../Assets/Img/pattern1.jpg';
import pattern2 from '../Assets/Img/pattern2.jpg';
import pattern3 from '../Assets/Img/pattern3.jpg';
import Brushes from '../Assets/Img/Brushes.jpg';
function Categories3() {

    return (
   
<div className="container">
<div className="row">

     
      <div>
      <br></br>
      </div>       <Breadcrumb >
  <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Category</Breadcrumb.Item>
</Breadcrumb>

<br></br>
<div className="row">
                <div className="col mt-3">
                    <h4>Categories</h4>
                    <br></br>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    <div className="row">
                <div className="col-md-5">                   
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={Brushes} className="card-img-top" alt="Pattern one" />
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">
                                <NavLink to="/category1">Brushes and Painting Tools</NavLink>
                            </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                
                </div>
                <br></br>
                <div className="row">
                <div className="col-md-5">
                    <div className="card card-fluid" style={{ width: 'auto' }}>
                        <img src={pattern2} className="card-img-top" alt="Pattern two" />
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">
                                <NavLink to="/">Category 2</NavLink>
                            </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
                <div className="col-md-5">
                    <div className="card" style={{ width: 'auto' }}>
                        <img src={pattern3} className="card-img-top" alt="Pattern three" />
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">
                                <NavLink to="/">Category 3</NavLink>
                            </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br></br>
        </div>

  
    )
}

export default Categories3;