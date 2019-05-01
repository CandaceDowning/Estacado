import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div id='nav-main'>
        <nav className='nav'>
          <ul>
            <li>
              <a href='#about-main'>About</a>
            </li>
            <li>
              <a href='#media-main'>Music</a>
            </li>
            <li>
              <a href='#events-main'>Shows</a>
            </li>
            <li>
              <a>Links</a>
            </li>
            <li>
              <a>Merch</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
