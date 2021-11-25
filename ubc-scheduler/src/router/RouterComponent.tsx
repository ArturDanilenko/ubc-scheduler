import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import LandingPage from '../components/LandingPage';
import LandingPageDupe from '../components/LandingPageDupe';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<LandingPageDupe/>}/>
            </Routes>
        </Router>
    )
}

export default RouterComponent;