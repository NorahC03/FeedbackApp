import { useContext } from 'react';
import Card from './Shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackItem({ item }) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);
  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
          <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}
export default FeedbackItem;
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
