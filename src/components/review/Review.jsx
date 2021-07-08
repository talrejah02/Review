import React from 'react'
import AddReview from '../add-review/Addreview'
import List from '../review list/List'
import './review.css'

function Review() {
    return (
        <div className="review">
            <AddReview/>
            <List/>
            
        </div>
    )
}

export default Review
