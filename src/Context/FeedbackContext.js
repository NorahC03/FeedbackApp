import { createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    let [feedback, setFeedback] = useState([{
            id: 1,
            text: "This is a test for react context for universal state",
            rating: 9
        }, {
            id: 2,
            text: "Review 2",
            rating: 7
        },
        {
            id: 3,
            text: "Review 3",
            rating: 2
        }
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        // console.log(id);
        if (window.confirm('Sure you want delete the item ')) {
            setFeedback(feedback.filter((item) => item.id !== id));
            // console.log(feedback);
        }
    };
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    const editFeedback = (element) => {
        // console.log(element);
        setFeedbackEdit({
                item: element,
                edit: true,
            })
            // console.log(feedbackEdit);
    }
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=>(
            item.id===id?{...item,...updItem}:item
        )))
    }



    // console.log(feedbackEdit);
    return ( <FeedbackContext.Provider value = {
            {
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }
        } > 
        { children } </FeedbackContext.Provider>
    )

}
export default FeedbackContext;