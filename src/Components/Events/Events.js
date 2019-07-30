import React, { Component } from "react";
import DateList from "./DateList";
require("dotenv").config();

const TEST_STRING = process.env.TEST_STRING;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: []
    };
  }

  componentDidMount() {
    fetch(
      `https://rest.bandsintown.com/artists/Estacado/events?app_id=${CONNECTION_STRING}`
    )
      .then(response => response.json())
      .then(tourDates => this.setState({ tourDates: tourDates }));
  }

  render() {
    console.log(this.state);
    return (
      <div id='events-main'>
        <div className='events-background' />
        <div className='shows'>
          <DateList tourDates={this.state.tourDates} />
        </div>
      </div>
    );
  }
}
