import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import { FeedbackProvider } from '../Context/FeedbackContext';
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return (
      <>
        <div>No feedback items present</div>
      </>
    );
  }

  return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
  );
}
export default FeedbackList;