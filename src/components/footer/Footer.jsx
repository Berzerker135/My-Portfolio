import "./Footer.scss";
import Title from "../../utils/Title";
import { FaCheck } from "react-icons/fa6";
import Logo from "../../../public/assets/logo/Logo";
import Navigation from "../navigation/Navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRef } from "react";
import Circle from "../../utils/Circle";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./Responsive.scss";
function Footer() {
  const year = new Date().getFullYear();
  console.log(year);
  const topRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <footer className="footer">
      <Circle className="glow-footer" />
      <div className="container-all-footer">
        <motion.div
          className="scrollTop"
          onClick={scrollToTop}
          initial={{ y: 0, rotate: 180 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "revese",
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <i>
            <MdOutlineKeyboardArrowDown />
          </i>
        </motion.div>
        <div className="content-logo-footer">
          <Logo />
        </div>
        <div className="container-social-footer">
          <a href="https://www.facebook.com/aiden.pearcemg">
            <div>
              <i>
                <FaFacebookF />
              </i>
            </div>
          </a>

          <a href="https://github.com/Berzerker135">
            <div>
              <i>
              <FaGithub />
              </i>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/andrian-ntsoa-558a33316">
            <div>
              <i>
              <FaLinkedinIn />
              </i>
            </div>
          </a>

          <a href="https://wa.me/261348982385">
            <div>
              <i>
              <FaWhatsapp />
              </i>
            </div>
          </a>
        </div>
        <div className="content-nav-footer">
          <Navigation navClass="nav-footer" linkClass="link-footer" />
        </div>

        <div className="container-right">
          <p>&copy; {year} Andrian. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
