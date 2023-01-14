import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/Shared/FeedbackForm';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Sure you want delete the item ')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  // console.log(feedback);
  return (
    <>
      <Header text="Feedback UI" />
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList FeedbackData={feedback} handelDelete={deleteFeedback} />
    </>
  );
}
export default App;
