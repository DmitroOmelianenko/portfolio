import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: overlayFadeIn 0.3s ease-in-out;
  padding: 20px;

  @keyframes overlayFadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: scaleUp 0.3s ease-in-out;
  max-height: 90vh;
  overflow-y: auto;

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

  h2 {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input,
  textarea,
  select {
    padding: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #b41212;
      box-shadow: 0 0 5px rgba(180, 18, 18, 0.3);
    }
  }

  button {
    padding: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    background-color: #b41212;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #8a0e0e;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
    }
  }

  .close-btn {
    background-color: #666;
    margin-top: 10px;
    width: 100%;

    &:hover {
      background-color: #444;
    }
  }

  .success-message {
    color: #27ae60;
    text-align: center;
    font-weight: bold;
    margin: 20px 0;
  }

  .error-message {
    color: #e74c3c;
    text-align: center;
    font-weight: bold;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 25px;

    h2 {
      font-size: 24px;
    }

    input,
    textarea,
    select {
      font-size: 16px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    h2 {
      font-size: 20px;
    }

    form {
      gap: 12px;
    }
  }
`;

export default function ServiceModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const FORMSPREE_URL = 'https://formspree.io/f/mdaakgno';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Перевірка чи заповнені всі поля
    if (!formData.name || !formData.email || !formData.service) {
      setMessage('❌ Будь ласка, заповніть обов\'язкові поля');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage('✅ Дякуємо! Ваше замовлення отримано. Ми зв\'яжемось з вами найближчасом!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          description: ''
        });

        setTimeout(() => {
          setMessage('');
          onClose();
        }, 3500);
      } else {
        setMessage('❌ Помилка при відправці. Спробуйте ще раз. Статус: ' + response.status);
      }

    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Помилка при відправці. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Замовити послугу</h2>
        {message && (
          <div className={message.includes('Дякуємо') ? 'success-message' : 'error-message'}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Виберіть послугу *</option>
            <option value="website">Розробка вебсайту</option>
            <option value="markup">Верстка сайту</option>
            <option value="consultation">Консультація</option>
            <option value="other">Інше</option>
          </select>
          <textarea
            name="description"
            placeholder="Опишіть вашу ідею"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Надсилання...' : 'Відправити'}
          </button>
          <button type="button" className="close-btn" onClick={onClose}>
            Закрити
          </button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}
