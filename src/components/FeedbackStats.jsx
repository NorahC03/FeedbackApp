import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let rating =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  rating = rating.toFixed(1);
  return (
    <>
      <div className="feedback-stats">
        <h4>{feedback.length} reviews</h4>
        <h4>Average Rating:{isNaN(rating) ? '0' : rating}</h4>
      </div>
    </>
  );
}
export default FeedbackStats;
