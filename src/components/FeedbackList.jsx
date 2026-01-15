import React from 'react';
import styled from 'styled-components';

const StyledFeedbackList = styled.div`
    h2 {
        font-family: 'Arial', sans-serif;
        font-size: 28px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        background-color: white;
        padding: 20px;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        color: #333;
        line-height: 1.6;
        border-left: 4px solid #b41212;
        animation: slideInUp 0.5s ease-out backwards;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    li:nth-child(1) { animation-delay: 0.1s; }
    li:nth-child(2) { animation-delay: 0.2s; }
    li:nth-child(3) { animation-delay: 0.3s; }
    li:nth-child(4) { animation-delay: 0.4s; }
    li:nth-child(5) { animation-delay: 0.5s; }

    li:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(180, 18, 18, 0.2);
    }

    .emptyMessage {
        text-align: center;
        color: #999;
        padding: 40px 20px;
        font-style: italic;
    }
`;

const FeedbackList = ({ feedbacks }) => {
    return (
        <StyledFeedbackList>
            <h2>Отримані відгуки ({feedbacks.length})</h2>
            {feedbacks.length === 0 ? (
                <p className="emptyMessage">На разі немає відгуків. Будьте першим!</p>
            ) : (
                <ul>
                    {feedbacks.map((feedback, index) => (
                        <li key={index}>{feedback}</li>
                    ))}
                </ul>
            )}
        </StyledFeedbackList>
    );
};

export default FeedbackList;