import React from "react";
import styled from "styled-components";

const StyledContacts = styled.section`
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

    .contactsTitle {
        font-family: 'Arial', sans-serif;
        font-size: 36px;
        color: #333;
        text-align: center;
        padding-top: 40px;
        animation: slideInLeft 0.6s ease-in-out;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .contactsContainer {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin: 40px;
        flex-wrap: wrap;
    }

    .contactItem {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 300px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: scaleUp 0.6s ease-out backwards;
    }

    @keyframes scaleUp {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .contactItem:nth-child(1) { animation-delay: 0.1s; }
    .contactItem:nth-child(2) { animation-delay: 0.2s; }
    .contactItem:nth-child(3) { animation-delay: 0.3s; }

    .contactItem:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(180, 18, 18, 0.2);
    }

    .contactItem h3 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        color: #b41212;
        margin-bottom: 15px;
    }

    .contactItem p {
        font-family: 'Arial', sans-serif;
        font-size: 18px;
        color: #333;
        margin: 0;
    }

    .contactItem a {
        color: #b41212;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .contactItem a:hover {
        text-decoration: underline;
        color: #8a0e0e;
    }

    /* Tablet */
    @media (max-width: 768px) {
        .contactsTitle {
            font-size: 28px;
            padding-top: 30px;
        }

        .contactsContainer {
            gap: 30px;
            margin: 30px 20px;
        }

        .contactItem {
            width: 100%;
            padding: 20px;
        }

        .contactItem h3 {
            font-size: 20px;
        }

        .contactItem p {
            font-size: 16px;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        .contactsTitle {
            font-size: 24px;
            padding-top: 20px;
        }

        .contactsContainer {
            gap: 15px;
            margin: 20px 15px;
            flex-direction: column;
        }

        .contactItem {
            width: 100%;
            padding: 15px;
        }

        .contactItem h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .contactItem p {
            font-size: 14px;
        }
    }
`;

const Contacts = () => {
    return (
        <StyledContacts id="contacts">
            <h2 className="contactsTitle">Контакти</h2>
            <div className="contactsContainer">
                <div className="contactItem">
                    <h3>📧 Email</h3>
                    <p><a href="mailto:dmitroomelianenko@gmail.com">dmitroomelianenko@gmail.com</a></p>
                </div>
                <div className="contactItem">
                    <h3>📱 Телефон</h3>
                    <p><a href="tel:+380669512399">+380 66 951 23 99</a></p>
                </div>
                <div className="contactItem">
                    <h3>💬 Соцмережі</h3>
                    <p>
                        <a href="https://github.com/DmitroOmelianenko" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </p>
                </div>
            </div>
        </StyledContacts>
    );
}

export default Contacts;