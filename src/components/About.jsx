import React from "react"
import styled from "styled-components"
import dmytro from '../images/dmytro.jpg'

const StyledAbout = styled.section`
   background-color: #b41212;
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

    .aboutTitle {
        font-family: 'Arial', sans-serif;
        font-size: 36px;
        color: white;
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

    .aboutBox {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 40px;
        animation: slideInRight 0.6s ease-in-out 0.2s both;
        gap: 30px;
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

    .aboutText {    
        font-family: 'Arial', sans-serif;
        font-size: 18px;
        color: white;
        line-height: 1.6;
        width: 60%;
    }
    img {
        width: 250px;
        height: auto;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    img:hover {
        transform: scale(1.05) rotateZ(-2deg);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    }

    button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 12px 30px;
        font-size: 18px;
        font-family: 'Arial', sans-serif;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
        animation: scaleUp 0.6s ease-in-out 0.4s both;
    }

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

    button:hover {
        background-color: #ffcc00;
        color: #333;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
    }

    button:active {
        transform: translateY(0);
    }

    /* Tablet */
    @media (max-width: 768px) {
        .aboutBox {
            flex-direction: column;
            margin: 30px 20px;
            gap: 20px;
        }

        .aboutText {
            width: 100%;
            font-size: 16px;
        }

        img {
            width: 200px;
        }

        .aboutTitle {
            font-size: 28px;
            padding-top: 30px;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        .aboutBox {
            margin: 20px 15px;
            gap: 15px;
        }

        .aboutText {
            font-size: 14px;
            line-height: 1.5;
        }

        img {
            width: 150px;
        }

        .aboutTitle {
            font-size: 24px;
            padding-top: 20px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
        }
    }
`
export default function About({ onOrderClick }) {
    return (
        <>
        <StyledAbout className="about" id="about">
<h2 className="aboutTitle">Про мене</h2>

<div className="aboutBox">
    <h2 className="aboutText">Вітаю! Мене звати Дмитро, мені 14 років, і я люблю створювати нове — від простих сайтів до цікавих проєктів, у яких можу втілювати свої ідеї. Постійно вчуся чомусь новому: експериментую з кодом, досліджую сучасні технології та вдосконалюю свої навички. Я вірю, що вік не обмежує можливості. Якщо є цікавість і бажання розвиватися, можна досягти багато чого. У своїх проєктах намагаюся поєднувати творчість і логіку, роблячи їх зручними, зрозумілими й стильними. З радістю ділюся тим, що вже створив, і з нетерпінням рухаюся далі — до нових ідей, досвіду та досягнень.</h2>
    <img src={dmytro} alt="dmytro" />
</div>
<button type="button" onClick={onOrderClick}>Замовити послугу</button>
        </StyledAbout>
        </>
    ) 
}