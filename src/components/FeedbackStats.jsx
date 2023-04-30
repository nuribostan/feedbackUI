import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

  let average =
  feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="stats">
      <h4>Review: {feedback.length}</h4>
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
