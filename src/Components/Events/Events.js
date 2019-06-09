import React, { Component } from "react";
import DateList from "./DateList";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: []
    };
  }

  componentDidMount() {
    fetch(
      "https://rest.bandsintown.com/artists/Sweater%20Beats/events?app_id=Test"
    )
      .then(response => response.json())
      .then(tourDates => this.setState({ tourDates: tourDates }));
  }

  render() {
    console.log(this.state);
    return (
      <div id='events-main'>
        <DateList tourDates={this.state.tourDates} />
      </div>
    );
  }
}
