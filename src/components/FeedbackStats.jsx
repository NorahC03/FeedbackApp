import PropTypes from 'prop-types';
function FeedbackStats({ feedback }) {
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
FeedbackStats.protoType = {
  feedback: PropTypes.array.isRequired,
};
