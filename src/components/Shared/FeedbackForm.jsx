import Card from './Card';
import { useState } from 'react';
import Button from './Button';
import RatingSelect from '../ratingSelect';
function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const handelTextChange = (e) => {
    if (text === '') {
      setDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Text should be greater then 10 letters ');
      setDisabled(true);
    } else {
      setDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handelRatingChange = (id) => {
    setRating(id);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text: text,
      };
      addFeedback(newFeedback);
    }
  };

  // console.log(rating);
  return (
    <form onSubmit={handelSubmit}>
      <Card>
        <h2>What would you rate your journey with us</h2>
        <RatingSelect RatingChange={handelRatingChange} />
        <div className="input-group">
          <input
            onChange={handelTextChange}
            type="text"
            value={text}
            placeholder="enter your review"
          />
          <Button version="secondary" type="submit" isDisabled={disabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </Card>
    </form>
  );
}
export default FeedbackForm;
