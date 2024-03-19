// App.js
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SubmitForm from './SubmitForm';
import './App.css'; // Import CSS file for styling
import ViewForm from './ViewForm';


const App = () => {
  return (
    <Router>
      <div className="container">
        <h2>Hi, welcome user!</h2>
        <div className="buttons">
          <Link to="/submit-form" className="submit-button">Submit Form</Link>
          <Link to="/view-form" className="view-button">View Form</Link>
        </div>
        <Routes>
          <Route path='/submit-form' element={<SubmitForm />} />
          <Route path="/view-form" element={<ViewForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
