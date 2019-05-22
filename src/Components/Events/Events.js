import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      <div id='events-main'>
        <script
          charset='utf-8'
          src='https://widget.bandsintown.com/main.min.js'
        />
        <a
          class='bit-widget-initializer'
          data-artist-name='estacado'
          data-display-local-dates='false'
          data-display-past-dates='false'
          data-auto-style='false'
          data-text-color='#000000'
          data-link-color='#7bb3b9'
          data-background-color='rgba(0,0,0,0)'
          data-display-limit='5'
          data-link-text-color='#fcdfb3'
          data-display-lineup='false'
          data-display-play-my-city='false'
          data-separator-color='rgba(255, 255, 255, 0.5)'
        />
      </div>
    );
  }
}
