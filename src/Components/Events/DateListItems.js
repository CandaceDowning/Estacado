import React from "react";

const TourDateItem = ({ tourDate }) => {
  const USAShow = "United States";
  const DateInfo = new Date(tourDate.datetime);
  const MonthNames = [
    "Jan",
    "Febr",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const TicketUrl = tourDate.url;
  const Venue = tourDate.venue.name;
  const Region =
    tourDate.venue.country === USAShow
      ? tourDate.venue.region
      : tourDate.venue.country;
  const City = tourDate.venue.city;
  const DayofWeek = Days[DateInfo.getDay()];
  const Month = MonthNames[DateInfo.getMonth()];
  const DateNumber = DateInfo.getDate();
  const TicketText =
    tourDate.offers.length === 0
      ? "RSVP"
      : tourDate.offers[0].status === "sold out"
      ? "Sold Out"
      : "Buy Tickets";

  return (
    <div className='date'>
      <div className='shows-title'>
        <h1>Shows</h1>
      </div>
      <div className='day'>
        <div>
          <h2>
            {DayofWeek} {Month} {DateNumber}
          </h2>
        </div>
        <div className='location'>
          <h4>{Venue}</h4>
          <h3>
            {City}, {Region}
          </h3>
        </div>
        <div className='rsvp'>
          <a href={TicketUrl} target='_blank' rel='noopener noreferrer'>
            <h4>{TicketText}</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourDateItem;
