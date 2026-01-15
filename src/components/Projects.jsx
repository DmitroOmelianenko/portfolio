import styled from "styled-components";
import React from "react";
import greyWolf from "../images/greywolf.png"
import focusFrame from '../images/focusframe.png'
import es from '../images/es.png'

const StyledProjects = styled.section`
    background-color: #3b3b3b;
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

    .projectsName {
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

    .projectList {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: 40px auto;
        padding: 0;
        max-width: 1000px;
    }
    .projectItem {
        background-color: #555;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: slideInUp 0.6s ease-in-out backwards;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: center;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .projectItem:nth-child(1) {
      animation-delay: 0.1s;
    }
    .projectItem:nth-child(2) {
      animation-delay: 0.2s;
    }
    .projectItem:nth-child(3) {
      animation-delay: 0.3s;
    }

    .projectItem:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(255, 204, 0, 0.3);
    }

    .projectPhoto { 
        width: 100%;
        height: auto;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    .projectPhoto:hover {
        transform: scale(1.02);
    }

    .projectContent {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .projectName {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        color: #ffcc00;
        margin-bottom: 10px;

        a {
            color: #ffcc00;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a:hover {
            text-decoration: underline;
            color: #fff;
        }
    }
    .projectDescription {
        font-family: 'Arial', sans-serif;
        font-size: 18px;
        color: white;
        line-height: 1.6;
    }

    /* Tablet */
    @media (max-width: 768px) {
        .projectsName {
            font-size: 28px;
            padding-top: 30px;
        }

        .projectList {
            gap: 30px;
            margin: 30px auto;
        }

        .projectItem {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }

        .projectName {
            font-size: 20px;
        }

        .projectDescription {
            font-size: 16px;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        .projectsName {
            font-size: 24px;
            padding-top: 20px;
        }

        .projectList {
            gap: 20px;
            margin: 20px 15px;
        }

        .projectItem {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 15px;
        }

        .projectName {
            font-size: 18px;
        }

        .projectDescription {
            font-size: 14px;
            line-height: 1.5;
        }
    }

    
`

export default function Projects() {
    return(
        <>
        <StyledProjects className="projects" id="projects">
            <h2 className="projectsName">Мої проєкти</h2>

            <ul className="projectList">
                <li className="projectItem">
                    <img className="projectPhoto" src={greyWolf} alt="greyWolf" />
                    <div className="projectContent">
                        <h2 className="projectName">Спортивний клуб <a href="https://greywolf.com.ua/" target="_blank" rel="noopener noreferrer">Grey Wolf</a></h2>
                        <p className="projectDescription">Створив сайт для проєкту GREY WOLF, де представлено послуги персонального тренера та інформацію про тренування й харчування. Розробив структуру сторінок, використав семантичну розмітку, забезпечив адаптивність під різні пристрої та зробив інтерфейс зручним і зрозумілим для користувачів. Цей проєкт демонструє мої навички у створенні сучасних і функціональних вебсайтів</p>
                    </div>
                </li>
                 <li className="projectItem">
                    <img className="projectPhoto" src={focusFrame} alt="focusFrame" />
                    <div className="projectContent">
                        <h2 className="projectName">
                            <a href="https://tate-t.github.io/focus-frame-project/" target="_blank" rel="noopener noreferrer">Focus Frame</a>
                        </h2>
                        <p className="projectDescription">Це командний вебпроєкт Focus Frame — сайт, створений за готовим макетом і розміщений на GitHub учителя. Ми відтворили структуру дизайну, підготували всі основні секції та забезпечили коректне відображення на різних пристроях. У цьому проєкті я відповідав за розмітку, організацію контенту та реалізацію стилів, завдяки чому сайт виглядає цілісно й повторює макет.</p>
                    </div>
                </li>
                 <li className="projectItem">
                    <img className="projectPhoto" src={es} alt="education-sertificate" />
                    <div className="projectContent">
                        <h2 className="projectName">
                            <a href="https://tate-t.github.io/education-certificate/" target="_blank" rel="noopener noreferrer"> Education Sertificate</a>
                        </h2>
                        <p className="projectDescription">Це командний проєкт сайту Education Certificate, створений разом з одногрупниками за готовим макетом і розміщений на GitHub Pages учителя-ментора. Ми реалізували всі секції сторінки відповідно до дизайну, забезпечили адаптивність для різних пристроїв та чітку структуру контенту. Я працював над розміткою і стилями, завдяки чому сайт виглядає цілісно й функціонально. Проєкт демонструє мою здатність працювати в команді та втілювати дизайн у реальний вебсайт.</p>
                    </div>
                </li>
            </ul>
        </StyledProjects>
        </>
    )
}