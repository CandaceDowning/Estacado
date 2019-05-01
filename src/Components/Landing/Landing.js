import React, { Component } from "react";
import album from "../../assets/album-cover.png";

export default class Landing extends Component {
  render() {
    return (
      <div id='landing' role='img'>
        <h1 className='title'>Estacado</h1>
        <img src={album} />
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
