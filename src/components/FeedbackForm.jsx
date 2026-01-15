import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    animation: scaleUp 0.6s ease-out;

    @keyframes scaleUp {
      from {
        transform: scale(0.95);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    textarea {
        width: 100%;
        padding: 15px;
        font-size: 16px;
        font-family: 'Arial', sans-serif;
        border: 2px solid #ddd;
        border-radius: 5px;
        resize: vertical;
        min-height: 120px;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        margin-bottom: 15px;

        &:focus {
            outline: none;
            border-color: #b41212;
            box-shadow: 0 0 8px rgba(180, 18, 18, 0.2);
        }
    }

    button {
        background-color: #b41212;
        color: white;
        padding: 12px 30px;
        font-size: 16px;
        font-family: 'Arial', sans-serif;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        width: 100%;

        &:hover {
            background-color: #8a0e0e;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(180, 18, 18, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }
`;

const FeedbackForm = ({ onSubmit }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim()) {
            onSubmit(feedback);
            setFeedback('');
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Напишіть свій відгук або коментар..."
                required
            />
            <button type="submit">Відправити відгук</button>
        </StyledForm>
    );
};

export default FeedbackForm;