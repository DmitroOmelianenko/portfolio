// App.jsx
import React, { useEffect, useMemo, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import About from "./components/About";
import Projects from "./components/Projects";
import Skils from "./components/Skils";
import Benefits from "./components/Benefits";
import Contacts from "./components/Contacts";
import ServiceModal from "./components/ServiceModal";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');

  :root{
    --bg: #0f0f12;
    --text: #f3f4f6;
    --muted: rgba(243,244,246,.72);
    --accent: #b41212;
    --accent2: #ffcc00;
  }
  *{ box-sizing:border-box; }
  html{ scroll-behavior:smooth; }
  body{
    margin:0;
    font-family: "Manrope", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: radial-gradient(1200px 700px at 20% -10%, rgba(180,18,18,.20), transparent 60%),
                radial-gradient(1000px 600px at 85% 0%, rgba(255,204,0,.10), transparent 55%),
                var(--bg);
    color: var(--text);
  }
`;

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  backdrop-filter: blur(10px);
  background: rgba(15,15,18,.74);
  border-bottom: 1px solid rgba(255,255,255,.08);
  animation: ${slideDown} .35s ease both;

  .bar {
    max-width: 1100px;
    margin: 0 auto;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
  }

  .brandWrap {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 220px;
  }

  .logo {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, rgba(180,18,18,.95), rgba(255,204,0,.75));
    box-shadow: 0 12px 28px rgba(0,0,0,.35);
    border: 1px solid rgba(255,255,255,.14);
    color: #fff;
    font-weight: 900;
    letter-spacing: .5px;
    font-size: 14px;
    line-height: 1;
    user-select: none;
  }

  .brand {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .brandTop {
    font-weight: 900;
    letter-spacing: .5px;
    font-size: 14px;
    line-height: 1.1;
    color: #fff;
  }

  .brandSub {
    font-size: 12px;
    color: rgba(255,255,255,.72);
    line-height: 1.1;
  }

  .nav {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .link {
    border: 1px solid transparent;
    background: transparent;
    color: #fff;
    padding: 10px 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 13px;
    cursor: pointer;
    transition: transform .16s ease, background .16s ease, border-color .16s ease, color .16s ease;
    white-space: nowrap;
  }

  .link:hover {
    transform: translateY(-1px);
    border-color: rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
  }

  .linkActive {
    border-color: rgba(255,204,0,.26);
    background: rgba(255,204,0,.10);
    color: #fff;
  }

  .cta {
    border: 0;
    padding: 10px 14px;
    border-radius: 12px;
    font-weight: 900;
    font-size: 13px;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(135deg, var(--accent), #8a0e0e);
    box-shadow: 0 10px 28px rgba(180,18,18,.22);
    transition: transform .16s ease, filter .16s ease, box-shadow .16s ease;
  }

  .cta:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 14px 34px rgba(180,18,18,.30);
  }

  .cta:active { transform: translateY(0); }

  @media (max-width: 820px) {
    .brandWrap { min-width: auto; }
    .brandSub { display: none; }
  }

  @media (max-width: 620px) {
    .brand { display: none; }
  }

  @media (max-width: 520px) {
    .bar { padding: 10px 12px; justify-content: center; }
    .nav { justify-content: center; }
    .cta { width: 100%; }
    .link { padding: 9px 10px; font-size: 12px; }
  }
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState("about");

  const sections = useMemo(
    () => [
      { id: "about", label: "Про мене" },
      { id: "benefits", label: "Можливості" },
      { id: "projects", label: "Проєкти" },
      { id: "skills", label: "Навички" },
      { id: "contacts", label: "Контакти" }
    ],
    []
  );

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = header ? header.getBoundingClientRect().height : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset + 1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const header = document.querySelector("header");
    const offset = header ? header.getBoundingClientRect().height : 0;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${Math.round(offset + 10)}px 0px -55% 0px`,
        threshold: [0.08, 0.14, 0.22, 0.35]
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sections]);

  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <div className="bar">
          <div className="brandWrap">
            <div className="logo" aria-hidden="true">DO</div>
            <div className="brand">
              <div className="brandTop">Dmytro Omelianenko</div>
              <div className="brandSub">Frontend • React</div>
            </div>
          </div>

          <nav className="nav">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`link ${active === s.id ? "linkActive" : ""}`}
                onClick={() => scrollToSection(s.id)}
              >
                {s.label}
              </button>
            ))}
            <button type="button" className="cta" onClick={() => setIsModalOpen(true)}>
              Замовити
            </button>
          </nav>
        </div>
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