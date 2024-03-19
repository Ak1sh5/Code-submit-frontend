// ViewForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewForm.css';

const ViewForm = () => {
    const [formEntries, setFormEntries] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/submissions');
            setFormEntries(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Format the date according to the user's locale
    };
    return (
        <div className="view-form-container">
            <h2>View Submitted Forms</h2>
            <table className="form-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Language</th>
                        <th>Standard Input</th>
                        <th>Source Code</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {formEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.username}</td>
                            <td>{entry.language}</td>
                            <td>{entry.stdin}</td>
                            <td>{entry.sourceCode ? entry.sourceCode.slice(0, 100) : ''}</td> {/* Check if sourceCode is not undefined or null */}
                            <td>{formatDate(entry.timestamp)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewForm;