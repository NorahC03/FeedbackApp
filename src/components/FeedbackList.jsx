import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
function feedbackList({ FeedbackData, handelDelete }) {
  if (!FeedbackData || FeedbackData.length === 0) {
    return (
      <>
        <div>No feedback items present</div>
      </>
    );
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {FeedbackData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              idCross={(id) => handelDelete(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default feedbackList;
feedbackList.protoType = {
  FeedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};
