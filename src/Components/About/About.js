import React, { Component } from "react";
import mark from "../../assets/mark.jpg";
import ziggy from "../../assets/ziggy.jpg";
import adam from "../../assets/adam.jpg";

export default class About extends Component {
  render() {
    return (
      <div id='about-main'>
        <h1>Trio of Musicians from Dallas, Texas</h1>
        <div className='members'>
          <div className='mark'>
            <img src={mark} />
            <h2>MARK</h2>
            <p>drums</p>
          </div>
          <div className='adam'>
            <img src={adam} />
            <h2>ADAM</h2>
            <p>guitar</p>
          </div>
          <div className='ziggy'>
            <img src={ziggy} />
            <h2>ZIGGY</h2>
            <p>bass</p>
          </div>
        </div>
      </div>
    );
  }
}
