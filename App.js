// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomNavbar from './components/CustomNavbar';
// import Login from './components/Login';
// import HomePage from './components/HomePage';
// import BlogPosts from './components/BlogPosts';
// import Destinations from './components/Destinations';
// import GuideProfile from './components/GuideProfile';
// import ContactGuide from './components/ContactGuide';
// import Feedback from './components/Feedback';
// import TravelStories from './components/TravelStories';
// import NotFound from './components/NotFound';
// import Beaches from './components/Beaches';       // Import new component
// import Heritage from './components/Heritage';     // Import new component
// import Cuisine from './components/Cuisine';

// const App = () => {
 
//   return (
//     <Router>
//       <CustomNavbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/blog-posts" element={<BlogPosts />} />
//         <Route path="/destinations" element={<Destinations />} />
//         <Route path="/guide-profile" element={<GuideProfile />} />
//         <Route path="/contact-guide" element={<ContactGuide />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/travel-stories" element={<TravelStories />} />
//         <Route path="/beaches" element={<Beaches />} />
//             <Route path="/heritage" element={<Heritage />} />
//             <Route path="/cuisine" element={<Cuisine />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import HomePage from './components/HomePage';
import BlogPosts from './components/BlogPosts';
import Destinations from './components/Destinations';
import DestinationDetail from './components/DestinationDetail';
import GuideProfile from './components/GuideProfile';
import ContactGuide from './components/ContactGuide';
import Feedback from './components/Feedback';
import TravelStories from './components/TravelStories';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Beaches from './components/Beaches';       
import Heritage from './components/Heritage';    
 import Cuisine from './components/Cuisine';
 import BlogPostDetail from './components/BlogPostDetail';
 import GuideDetail from './components/GuideDetail';
 import Story1 from './components/Story1';
import Story2 from './components/Story2';
import Story3 from './components/Story3';
const App = () => {
  return (
    <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/blog-posts/:id" element={<BlogPostDetail />} /> 
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />
        <Route path="/guide-profile" element={<GuideProfile />} />
        <Route path="/guide-profile/:id" element={<GuideDetail />} />
        <Route path="/contact-guide" element={<ContactGuide />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/travel-stories" element={<TravelStories />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
        <Route path="/story3" element={<Story3 />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/heritage" element={<Heritage />} />
             <Route path="/cuisine" element={<Cuisine />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NavbarWrapper = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <CustomNavbar /> : null;
};

export default App;
