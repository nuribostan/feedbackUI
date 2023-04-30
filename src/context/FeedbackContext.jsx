import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
      item : {},
      edit : false
    })


    useEffect(() => {
        const feedbackData = JSON.parse(localStorage.getItem("feedback"));
        if (feedbackData) {
          setFeedback(feedbackData);
        }
      }, []);


    const saveToLocalStorage = (items) => {
        localStorage.setItem("feedback", JSON.stringify(items));
      };


      //delete
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete feedback?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
          saveToLocalStorage(feedback.filter((item) => item.id !== id));
        }
      };


      //add
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
        saveToLocalStorage([newFeedback, ...feedback]);
      };

      //edit
      const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit : true
        })
      }

      //update
      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => 
          item.id === id ? {...item, ...updItem} : item
        ))
        
        saveToLocalStorage(feedback.map((item) => item.id === id ? {...item, ...updItem} : item  ));
      }


  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext