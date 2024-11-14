import "./Header.scss";
import "./Responsive.scss";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Glow from "../../utils/Glow";
import Navigation from "../navigation/Navigation";
import Logo from "../../../public/assets/logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button";
import RevealToDown from "../RevealToDown";
import RevealDownNoOverflow from "../RevealDownNoOverFlow";
import { motion } from "framer-motion";

function Header(sections) {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState(!menuState);
  };

  const [scrollBar, setScrollBar] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position >= 560) {
      setScrollBar(true);
    } else {
      setScrollBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrollBar ? "header show-header-bg" : "header"}>
      <div
        className={menuState ? "blur blur-show" : "blur"}
        onClick={handleClick}
      ></div>
      <RevealDownNoOverflow>
        <Logo />
      </RevealDownNoOverflow>
      <Navigation
        navClass={menuState ? "nav-item nav-show" : "nav-item"}
        linkClass="nav-link"
        sections={sections}
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <div className="menu-container">
        <div class="menu" onClick={handleClick}>
          <div
            className={menuState ? "toogle toogle1" : "toogle"}
            id="toogle1"
          ></div>
          <div
            className={menuState ? "toogle toogle2" : "toogle"}
            id="toogle2"
          ></div>
          <div
            className={menuState ? "toogle toogle3" : "toogle"}
            id="toogle3"
          ></div>
        </div>
      </div>
      <RevealDownNoOverflow>
        <a href="#contact">
          <motion.button
            className="btn-header"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p>Contact</p>
          </motion.button>
        </a>
      </RevealDownNoOverflow>
    </header>
  );
}

export default Header;
