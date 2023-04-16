import React from "react";

function FeedbackStats({ item }) {
  let average =
    item.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / item.length;

  return (
    <div className="stats">
      <h4>Review: {item.length}</h4>
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
