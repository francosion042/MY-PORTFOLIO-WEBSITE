import React, { Component } from "react";
const date = new Date();
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
            <a href='https://twitter.com/tonisonblog24'>
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

          <p class='copyright'>
            <b>Francosion</b> © {date.getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
