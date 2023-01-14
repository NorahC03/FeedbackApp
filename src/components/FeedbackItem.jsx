import Card from './Shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
function FeedbackItem({ item, idCross }) {
  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes color="purple" onClick={() => idCross(item.id)}></FaTimes>
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
