import styled from "styled-components";
import React from "react";
import html from '../images/html5.png'
import css from '../images/css3.png'
import js from '../images/js.jpg'
import bootstrap from '../images/bootstrap.svg'
import sass from '../images/sass.png'
import bem from '../images/bem.png'
import vite from '../images/vite.png'
import parcel from '../images/parcel.png'
import mobileFirst from '../images/mobile-fist.png'
import optimi from '../images/optimization.png'

const StyledSkills = styled.section`
    background-color: white;
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

    .skils {
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

    .skillsList {
        list-style: none;
        display: flex;  
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin: 40px;
        padding: 0;
    }
    .skillsItem {   
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    animation: scaleUp 0.5s ease-out backwards;
}

.skillsItem:nth-child(1) { animation-delay: 0.1s; }
.skillsItem:nth-child(2) { animation-delay: 0.15s; }
.skillsItem:nth-child(3) { animation-delay: 0.2s; }
.skillsItem:nth-child(4) { animation-delay: 0.25s; }
.skillsItem:nth-child(5) { animation-delay: 0.3s; }
.skillsItem:nth-child(6) { animation-delay: 0.35s; }
.skillsItem:nth-child(7) { animation-delay: 0.4s; }
.skillsItem:nth-child(8) { animation-delay: 0.45s; }
.skillsItem:nth-child(9) { animation-delay: 0.5s; }
.skillsItem:nth-child(10) { animation-delay: 0.55s; }
.skillsItem:nth-child(11) { animation-delay: 0.6s; }

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

.skillsItem:hover {
    transform: scale(1.08) translateY(-5px);
    box-shadow: 0 12px 24px rgba(180, 18, 18, 0.2);
}

    .skillsImg {
        width: 80px;
        height: auto;
        margin-bottom: 15px;
        transition: transform 0.3s ease;
    }

    .skillsImg:hover {
        transform: rotate(10deg) scale(1.1);
    }

    .skillsName {
        font-family: 'Arial', sans-serif;   
        font-size: 24px;
        color: #333;    
        margin-bottom: 10px;
    }
    .skillsDescription {
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        color: #666;
        line-height: 1.4;
    }

    /* Tablet */
    @media (max-width: 768px) {
        .skils {
            font-size: 28px;
            padding-top: 30px;
        }

        .skillsList {
            gap: 30px;
            margin: 30px 20px;
        }

        .skillsItem {
            width: 220px;
            padding: 15px;
        }

        .skillsImg {
            width: 60px;
        }

        .skillsName {
            font-size: 20px;
        }

        .skillsDescription {
            font-size: 14px;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        .skils {
            font-size: 24px;
            padding-top: 20px;
        }

        .skillsList {
            gap: 20px;
            margin: 20px 10px;
            justify-content: space-between;
        }

        .skillsItem {
            width: calc(50% - 10px);
            padding: 12px;
        }

        .skillsImg {
            width: 50px;
        }

        .skillsName {
            font-size: 18px;
        }

        .skillsDescription {
            font-size: 12px;
            line-height: 1.3;
        }
    }


`

export default function Skils() {
    return(
    <>
    <StyledSkills className="skils" id="skills">
        <h2 className="skils">Навички</h2>

        <ul className="skillsList">
    <li className="skillsItem">
        <img src={html} alt="HTML5" className="skillsImg" />
        <h3 className="skillsName">HTML5</h3>
        <p className="skillsDescription">Створення семантичної, структурованої та доступної розмітки.</p>
    </li>
    <li className="skillsItem">
        <img src={css} alt="CSS3" className="skillsImg" />
        <h3 className="skillsName">CSS3</h3>
        <p className="skillsDescription">Адаптивні макети, анімації, Flexbox і Grid.</p>
    </li>
    <li className="skillsItem">
        <img src={js} alt="JavaScript" className="skillsImg" />
        <h3 className="skillsName">JavaScript</h3>
        <p className="skillsDescription">Робота з DOM, логіка інтерфейсу, сучасний ES6+ синтаксис.</p>
    </li>
    <li className="skillsItem">
        <img src={bootstrap} alt="Bootstrap 5" className="skillsImg" />
        <h3 className="skillsName">Bootstrap 5</h3>
        <p className="skillsDescription">Швидка побудова адаптивних інтерфейсів за допомогою готових компонентів.</p>
    </li>
    <li className="skillsItem">
        <img src={sass} alt="Sass/Scss" className="skillsImg" />
        <h3 className="skillsName">Sass/SCSS</h3>
        <p className="skillsDescription">Структурована стилізація з використанням змінних, міксинів та модулів.</p>
    </li>
    <li className="skillsItem">
        <img src={bem} alt="BEM" className="skillsImg" />
        <h3 className="skillsName">BEM methodology</h3>
        <p className="skillsDescription">Чітка система іменування класів для масштабованих інтерфейсів.</p>
    </li>
    <li className="skillsItem">
        <img src={vite} alt="Vite" className="skillsImg" />
        <h3 className="skillsName">Vite</h3>
        <p className="skillsDescription">Сучасний, надшвидкий збирач з підтримкою hot-reload.</p>
    </li>
    <li className="skillsItem">
        <img src={parcel} alt="Parcel" className="skillsImg" />
        <h3 className="skillsName">Parcel</h3>
        <p className="skillsDescription">Просте налаштування та автоматична оптимізація фронтенд ресурсів.</p>
    </li>
    <li className="skillsItem">
        <img src={mobileFirst} alt="Mobile First" className="skillsImg" />
        <h3 className="skillsName">Mobile First</h3>
        <p className="skillsDescription">Побудова інтерфейсу з пріоритетом для мобільних екранів.</p>
    </li>
    <li className="skillsItem">
        <img src={mobileFirst} alt="Desktop First" className="skillsImg" />
        <h3 className="skillsName">Desktop First</h3>
        <p className="skillsDescription">Розробка з орієнтацією на великі екрани з подальшою адаптацією.</p>
    </li>
    <li className="skillsItem">
        <img src={optimi} alt="Ретинізація графіки" className="skillsImg" />
        <h3 className="skillsName">Ретинізація графіки</h3>
        <p className="skillsDescription">Підготовка зображень високої щільності для Retina та HiDPI екранів.</p>
    </li>
</ul>

    </StyledSkills>
    </>
    )
}