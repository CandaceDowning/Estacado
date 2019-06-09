import React from "react";
import DateListItem from "./DateListItems";

const TourDateList = props => {
  const tourDateListItem = props.tourDates.map(tourDate => {
    return <DateListItem tourDate={tourDate} key={tourDate.id} />;
  });

  return (
    <div>
      <table>
        <tbody>{tourDateListItem}</tbody>
      </table>
    </div>
  );
};

export default TourDateList;
