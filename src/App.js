import styled from 'styled-components';
import { useState } from 'react';
import About from './components/About'
import Projects from './components/Projects';
import Skils from './components/Skils'
import Benefits from './components/Benefits'
import Contacts from './components/Contacts'
import ServiceModal from './components/ServiceModal';
import './App.css';
import './styles/animations.css';

const StyledHeader = styled.header`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: slideDown 0.5s ease-in-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .headerlist {
    list-style: none;
    display: flex;
    gap: 50px;
    padding: 20px;
    margin: 0;
    margin-left: 300px;
  }

  .headerItem {
    color: white;
    font-size: 18px;
  }
    
  .headerLink {
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-weight: normal;
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    transition: all 0.3s ease;
    position: relative;
  }

  .headerLink:hover {
    text-decoration: underline;
    color: #ffcc00;
    transition: color 0.3s ease;
    transform: translateY(-2px);
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .headerlist {
      gap: 15px;
      padding: 15px;
      margin-left: 0;
      flex-wrap: wrap;
      justify-content: center;
    }

    .headerLink {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .headerlist {
      gap: 10px;
      padding: 10px;
    }

    .headerLink {
      font-size: 12px;
    }
  }
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <> 
     <StyledHeader className='header'>
      <ul className='headerlist'>
        <li className='headerItem'>
          <h2 className='headerLink' onClick={() => scrollToSection('about')}>Про мене</h2>
        </li>
        <li className='headerItem'>
          <h2 className='headerLink' onClick={() => scrollToSection('benefits')}>Можливості</h2>
        </li>
        <li className='headerItem'>
          <h2 className='headerLink' onClick={() => scrollToSection('projects')}>Проєкти</h2>
        </li>
        <li className='headerItem'>
          <h2 className='headerLink' onClick={() => scrollToSection('skills')}>Навички</h2>
        </li>
        <li className='headerItem'>
          <h2 className='headerLink' onClick={() => scrollToSection('contacts')}>Контакти</h2>
        </li>
      </ul>
     </StyledHeader>

     <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
     <About onOrderClick={() => setIsModalOpen(true)} />
     <Benefits />
     <Projects />
     <Skils />
     <Contacts />
   </> 
  );
}

export default App;
