import React from 'react'
import { FaTimes } from 'react-icons/fa' 
import Card from './shared/Card'


function FeedbackItem({item, handleDelete}) {

  return (
    <Card>
        <div className="numDisplay">
            {item.rating}
        </div>
        <div className="handleDelete">
            <button onClick={() => handleDelete(item.id)} className='deleteFeedback'>
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