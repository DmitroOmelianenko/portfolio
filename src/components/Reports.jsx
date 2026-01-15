import styled from "styled-components";
import React, { useState } from "react";
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

const StyledReports = styled.section`
    background-color: #f0f0f0;
    padding-bottom: 40px;
    animation: fadeIn 0.8s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .reports {
        font-family: 'Arial', sans-serif;
        font-size: 36px;
        color: #333;
        text-align: center;
        padding-top: 40px;
        animation: slideInRight 0.6s ease-in-out;
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .reportsContent {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
`;

const Reports = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const handleFeedbackSubmit = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback]);
    };

    return (
        <StyledReports id="reports">
            <div className="reportsContent">
                <h1 className="reports">Відгуки</h1>
                <FeedbackForm onSubmit={handleFeedbackSubmit} />
                <FeedbackList feedbacks={feedbacks} />
            </div>
        </StyledReports>
    );
};

export default Reports;