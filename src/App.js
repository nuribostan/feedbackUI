import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useState , useEffect} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  useEffect(() => {
    const feedbackData = JSON.parse(localStorage.getItem('feedback'));
    if(feedbackData){
      setFeedback(feedbackData)
    }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('feedback', JSON.stringify(items))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
    saveToLocalStorage([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete feedback?")){
      setFeedback(feedback.filter((item) => item.id !== id))
      saveToLocalStorage(feedback.filter((item) => item.id !== id))
    }
    
  }

  return (
    <div className='container'>
      <Header headerTitle={"Feedback UI"} />
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats item={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
