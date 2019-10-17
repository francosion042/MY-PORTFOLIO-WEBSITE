import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient'>
        <div className='container'>
          <a className='navbar-brand logo' href='/'>
            <img
              src='./assets/img/Francosion.jpg'
              alt='logo'
              style={{ width: "200px", height: "30px", borderRadius: "10px" }}
            />
          </a>
          <button
            data-toggle='collapse'
            className='navbar-toggler'
            data-target='#navbarNav'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='nav navbar-nav ml-auto'>
              <li className='nav-item' role='presentation'>
                <a className='nav-link active' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' href='/portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' href='/team'>
                  Team
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' href='/about'>
                  About Me
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' href='/hireMe'>
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
