import React, { Component } from "react";
import group from "../../assets/groupPhoto.jpeg";

export default class About extends Component {
  render() {
    return (
      <div id='about-main'>
        <img
          src={group}
          alt={
            "The band members. With Adam on the left playing guitar, Mark in the middle playing drums, and Ziggy on right playing bass guitar."
          }
        />
        <div className='bio'>
          <p>
            Estacado is a three piece psych rock band from Dallas, Texas. Formed
            in 2018, the band has a spacey, psyched out shoegaze dynamic
            focusing on atmospheric soundscapes with funky grooves and punchy
            arrangements.
          </p>
          <p>
            Estacado released their demo EP in the spring of 2019 and is
            currently working on their debut album. They have recently hit the
            DFW circuit playing venues such as Top Ten Records and Tradewinds
            Social Club.
          </p>
        </div>
      </div>
    );
  }
}
