// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Header from "./components/Header";
// import FeedbackList from "./components/FeedbackList";
// import FeedbackStats from "./components/FeedbackStats";
// import FeedbackForm from "./components/FeedbackForm";
// import AboutLink from "./components/AboutIconLink";
// import { FeedbackProvider } from "./Context/FeedbackContext";

// function App() {
//   return (
//     {/* prettier-ignore */}
//     <>
//     <FeedbackProvider>
//       <Router>
//         <div className="container">
//           <Header text="Feedback UI" />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={
//                 <>
//                   <FeedbackForm />
//                   <FeedbackStats />
//                   <FeedbackList />
//                 </>
//               }
//             ></Route>
//             <Route path="/about" element={<About />} />
//           </Routes>
//           <AboutLink />
//         </div>
//       </Router>
// </FeedbackProvider>
// </>);
// }
// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import About from './pages/About';
import { FeedbackProvider } from './Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
