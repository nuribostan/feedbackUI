import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Buttons";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [alert, setAlert] = useState("");
  const [alertCount, setAlertCount] = useState();
  const [rating, setRating] = useState();

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleText = (e) => {
    setText(e.target.value);

    if (text === "") {
      setIsDisable(true);
      setAlert(null);
      setAlertCount(null);
    } else if (text !== "" && text.trim().length + 1 < 10) {
      setIsDisable(true);
      setAlert("Message must be at least 10 character");
      setAlertCount(`Remaining : ${10 - text.trim().length - 1}`);
    } else if (text !== "" && text.trim().length + 1 >= 10) {
      setIsDisable(false);
      setAlert(null);
      setAlertCount(null);
    } else {
      setIsDisable(true);
      setAlert(null);
      setAlertCount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length + 1 >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form className="feedbackForm" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="formGroup">
          <textarea
            className="inputMessage"
            type="text"
            placeholder="Write a message..."
            onChange={handleText}
            value={text}
            rows="2" cols="50" wrap="hard" 
          ></textarea>
          <Button
            isDisable={isDisable}
            version={"primary"}
            className="inputButton disable active"
            type="submit"
          >
            Send
          </Button>
        </div>
        {alert && <div className="alertMessage">{alert}</div>}
        {alertCount && <div className="alertCount">{alertCount}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
