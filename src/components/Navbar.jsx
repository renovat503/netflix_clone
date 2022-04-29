import React, { Component } from 'react';
import '../styles/navbar.css';
import logo from '../images/netflix_logo.svg';
class Navbar extends Component {
    render() { 
        return (
            <React.Fragment>
                <header className="p-3 navbar-bg text-white">
                    <div className="container-flex">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                        </a>
                         <img  className="logo nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" src={logo}/>

                        <h4 className="unlimited">UNLIMITED TV SHOWS & MOVIES</h4>

                         <div className="text-end">
                        <button type="button" className="btn btn-danger me-2">JOIN NOW</button>
                        <button type="button" className="btn btn-outline-light">SIGN IN</button>
                        </div>
                    </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;