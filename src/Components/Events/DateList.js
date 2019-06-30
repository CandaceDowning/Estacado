import React from "react";
import DateListItem from "./DateListItems";

const TourDateList = props => {
  const tourDateListItem = props.tourDates.map(tourDate => {
    return <DateListItem tourDate={tourDate} key={tourDate.id} />;
  });

  return <div className='dates'>{tourDateListItem}</div>;
};

export default TourDateList;
