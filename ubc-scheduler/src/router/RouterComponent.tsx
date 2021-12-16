import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import LandingPage from '../components/LandingPage';
import LandingPageDupe from '../components/LandingPageDupe';
import Nav from '../components/Nav/Nav';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<LandingPageDupe/>}/>
            </Routes>
        </Router>
    )
}

export default RouterComponent;