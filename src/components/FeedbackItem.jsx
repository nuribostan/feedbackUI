import React, {useContext} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa' 
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackItem({item}) {

    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
        <div className="numDisplay">
            {item.rating}
        </div>
        <div className="handleEdit">
            <button onClick={() => editFeedback(item)} className='editFeedback'>
                <FaEdit />
            </button>
        </div>
        <div className="handleDelete">
            <button onClick={() => deleteFeedback(item.id)} className='deleteFeedback'>
                <FaTimes />
            </button>
        </div>
        <div className="feedbackDisplay">
            {item.text}
        </div>

    </Card>
  )
}

export default FeedbackItem