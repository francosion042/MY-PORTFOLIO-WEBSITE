import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div
        class='footer-basic'
        style={{
          color: "rgb(254, 255, 255)",
          backgroundColor: "rgb(13, 12, 12)"
        }}
      >
        <footer>
          <div class='social'>
            <a href='http://www.instagram.com/_tonycee' target='blank'>
              <i className='icon ion-social-instagram-outline'></i>
            </a>
            <a href='#'>
              <i class='icon ion-social-twitter'></i>
            </a>
            <a href='https://web.facebook.com/francis.nwobodo.7' target='blank'>
              <i class='icon ion-social-facebook'></i>
            </a>
            <a
              href='https://wa.me/2348158037149?text=Hello!%2c%20I%20need%20your%20professional%20services'
              target='blank'
            >
              <i className='icon ion-social-whatsapp'></i>
            </a>
          </div>
          <ul class='list-inline'>
            <li class='list-inline-item'>
              <a href='/'>Home</a>
            </li>
            <li class='list-inline-item'>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li class='list-inline-item'>
              <a href='/about'>About</a>
            </li>
          </ul>
          <p class='copyright'>Company Name © 2017</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
