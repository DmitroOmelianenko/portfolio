import React from 'react';
import styled from 'styled-components';

const StyledBenefits = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  text-align: center;

  h2 {
    font-size: 42px;
    color: #333;
    margin-bottom: 40px;
    font-weight: bold;
    animation: fadeIn 0.8s ease-in-out;

    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 30px;
    }

    @media (max-width: 480px) {
      font-size: 26px;
      margin-bottom: 25px;
    }
  }

  .benefits-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      gap: 25px;
    }

    @media (max-width: 480px) {
      gap: 20px;
    }
  }

  .benefit-card {
    background: white;
    padding: 30px 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    animation: slideInUp 0.6s ease-in-out backwards;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(180, 18, 18, 0.2);
    }

    .icon {
      font-size: 48px;
      margin-bottom: 15px;
      display: block;
      animation: bounce 1s ease-in-out infinite;

      @media (max-width: 480px) {
        font-size: 40px;
      }
    }

    h3 {
      font-size: 24px;
      color: #b41212;
      margin-bottom: 12px;
      font-weight: bold;

      @media (max-width: 480px) {
        font-size: 20px;
      }
    }

    p {
      font-size: 16px;
      color: #666;
      line-height: 1.6;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

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

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default function Benefits() {
  const benefitsList = [
    {
      icon: '⚡',
      title: 'Швидкість',
      description: 'Роблю сайти швидко та якісно. Запускаю проекти в установлені строки без затримок.'
    },
    {
      icon: '💬',
      title: 'Комунікабельність',
      description: 'Завжди на зв\'язку. Регулярно звітую про прогрес, обговорюю ідеї та відповідаю на питання.'
    },
    {
      icon: '✨',
      title: 'Якість',
      description: 'Прагну досконалості в кожному деталі. Мої роботи відповідають сучасним стандартам індустрії.'
    },
    {
      icon: '🎯',
      title: 'Увага до деталей',
      description: 'Не пропускаю дрібниці. Кожен елемент дизайну та коду перевіряю ретельно.'
    },
    {
      icon: '🚀',
      title: 'Інноваційність',
      description: 'Використовую сучасні технології та тренди веб-розробки для найкращого результату.'
    },
    {
      icon: '🤝',
      title: 'Надійність',
      description: 'На мене можна покластися. Я дотримую обіцянки та дедлайни.'
    }
  ];

  return (
    <StyledBenefits id="benefits">
      <h2>Чим я можу бути вам корисним</h2>
      <div className="benefits-container">
        {benefitsList.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <span className="icon">{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </StyledBenefits>
  );
}
