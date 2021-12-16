import React, { useState } from "react";
import Reviews from "./Reviews";
import { useDispatch } from 'react-redux';
import { reviewAdded } from './reviewsSlice';

function ReviewInput({ restaurantId }) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(reviewAdded({comment: comment, restaurantId: restaurantId}))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='comment'>Comment</label>
          <textarea id='comment' name='comment' onChange={handleInputChange} value={comment} />
        </p>
        <input type='submit' value='Add Review' />
      </form>
    </div>
  );
}

export default ReviewInput;
