import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Feedback from './pages/feedback';
import Index from './pages/index';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/dar-feedback" element={<Feedback />} />
        </Routes>
    );
}