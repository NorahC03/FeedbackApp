import { useState, useEffect, useContext } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './ratingSelect';
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackForm() {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  // useEffect(() => {
  //   console.log(feedbackEdit);
  // }, [feedbackEdit]);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handelTextChange = ({ target: { value } }) => {
    if (value === '') {
      setDisabled(true);
      setMessage(null);
    } else if (value !== '' && text.trim().length < 10) {
      setMessage('Text should be greater then 10 letters ');
      setDisabled(true);
    } else {
      setDisabled(false);
      setMessage(null);
    }
    setText(value);
  };
  const handelRatingChange = (id) => {
    setRating(id);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
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
            placeholder="Enter your review"
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
