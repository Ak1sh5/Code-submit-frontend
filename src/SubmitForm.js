// SubmitForm.js
import React, { useState } from 'react';
import axios from 'axios';

import './SubmittedForm.css';

const initialState = {
    username: '',
    language: 'C++',
    stdin: '',
    sourceCode: ''
};

const SubmitForm = () => {
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://backendcodesubmit.onrender.com/submit', formData);
            console.log("Success");
            setFormData(initialState);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="submit-form-container">
            <h2>Submit Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="language">Preferred Language:</label>
                    <select id="language" name="language" value={formData.language} onChange={handleChange}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="stdin">Standard Input:</label>
                    <input type="text" id="stdin" name="stdin" value={formData.stdin} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="sourceCode">Source Code:</label>
                    <textarea id="sourceCode" name="sourceCode" value={formData.sourceCode} onChange={handleChange} rows="20"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;
