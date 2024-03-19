// SubmittedCodes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import CSS file

const SubmittedCodes = () => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        fetchSubmittedCodes();
    }, []);

    const fetchSubmittedCodes = async () => {
        try {
            const response = await axios.get('http://backend-server.com/api/submitted-codes');
            setCodes(response.data);
        } catch (error) {
            console.error('Error fetching submitted codes:', error);
        }
    };

    return (
        <div className="container">
            <h2>Submitted Codes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Code Language</th>
                        <th>Standard Input</th>
                        <th>Timestamp</th>
                        <th>Source Code</th>
                    </tr>
                </thead>
                <tbody>
                    {codes.map((code, index) => (
                        <tr key={index}>
                            <td>{code.username}</td>
                            <td>{code.language}</td>
                            <td>{code.stdin}</td>
                            <td>{code.timestamp}</td>
                            <td>{code.sourceCode.substring(0, 100)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmittedCodes;
