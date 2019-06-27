import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div id='nav-main'>
        <nav className='nav'>
          <ul>
            <li>
              <a href='#landing-main'>Home</a>
            </li>
            <li>
              <a href='#about-main'>Bio</a>
            </li>
            <li>
              <a href='#contact-main'>Connect</a>
            </li>
            <li>
              <a href='#media-main'>Music</a>
            </li>
            <li>
              <a href='#events-main'>Shows</a>
            </li>
            {/* <li>
              <a href='#events-main'>Shows</a>
            </li>
            <li>
              <a>Links</a>
            </li>
            <li>
              <a>Merch</a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
