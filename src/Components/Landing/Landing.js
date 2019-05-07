import React, { Component } from "react";
import album from "../../assets/album-cover.png";
import logo from "../../assets/estacado-text-logo.png";

export default class Landing extends Component {
  render() {
    return (
      <div id='landing-main' role='img'>
        <img
          className='text-logo'
          src={logo}
          alt='Hippy font logo for Estacado.'
        />
        <img
          className='round-logo'
          src={album}
          alt='Round abstract logo from first album.'
        />
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.lbk.ars.usda.gov/WEWC/llano/estacado.htm'>
          Image courtesy of the USDA-Agricultural Research Service
        </a>
      </div>
    );
  }
}
