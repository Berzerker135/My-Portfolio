import { useState, useEffect, useRef } from "react";
import RevealToDown from "../RevealToDown";

function Navigation({
  navClass,
  linkClass,
  sections,
  menuState,
  setMenuState,
}) {
  const handleClick = () => {
    setMenuState(false);
  };

  const [activeSection, SetActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SetActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.26 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const hndleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={navClass}>
      <ul>
        <RevealToDown>
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home" onClick={handleClick}>Accueil</a>
          </li>
        </RevealToDown>
        <RevealToDown>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about" onClick={handleClick}>À propos</a>
          </li>
        </RevealToDown>
        <RevealToDown>
          <li className={activeSection === "skill" ? "active" : ""}>
            <a href="#skill" onClick={handleClick}>Compétences</a>
          </li>
        </RevealToDown>
        <RevealToDown>
          <li className={activeSection === "services" ? "active" : ""}>
            <a href="#services" onClick={handleClick}>Services</a>
          </li>
        </RevealToDown>
        <RevealToDown>
          <li className={activeSection === "project" ? "active" : ""}>
            <a href="#project" onClick={handleClick}>Projets</a>
          </li>
        </RevealToDown>
      </ul>
    </nav>
  );
}
export default Navigation;
