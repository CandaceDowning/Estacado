import React, { Component } from "react";
import group from "../../assets/groupPhoto.jpeg";
import mark from "../../assets/mark.jpg";
import ziggy from "../../assets/ziggy.jpg";
import adam from "../../assets/adam.jpg";

export default class About extends Component {
  render() {
    return (
      <div id='about-main'>
        <img src={group} />
        <div className='bio'>
          <p>
            Estacado is a three piece psych rock band from Dallas, Texas. Formed
            in 2018, the band has a spacey, psyched out shoegaze dynamic
            focusing on atmospheric soundscapes with funky grooves and punchy
            arrangements. <br /> Estacado released their demo EP in the spring
            of 2019 and is currently working on their debut album. They have
            recently hit the DFW circuit playing venues such as Top Ten Records
            and Tradewinds Social Club.
          </p>
        </div>
      </div>
    );
  }
}
