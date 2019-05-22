import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <div id='media-main'>
        <h1>Listen to the new self titled album</h1>
        <div className='player-container'>
          <iframe
            className='player'
            src='https://bandcamp.com/EmbeddedPlayer/album=2427040168/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/'
            seamless>
            <a href='http://estacado.bandcamp.com/album/estacado'>
              Estacado by Estacado
            </a>
          </iframe>
        </div>
        <h2>
          Buy a digital download
          <a href='https://estacado.bandcamp.com/releases'> HERE</a>
        </h2>
      </div>
    );
  }
}
