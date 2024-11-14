import Circle from "../../utils/Circle";
import Dots from "../../utils/Dots";
import Glow from "../../utils/Glow";
import "./Home.scss";
import Button from "../Button";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import SvgHome from "../../utils/SvgHome";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import RevealText from "../RevealText";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import RevealToUp from "../RevealToUp";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./Responsive.scss";

function Home() {
  return (
    <section className="home" id="home">
      <Circle className="circle-home-1" />
      <Circle className="circle-home-2" />
      <Circle className="circle-home-3" />
      <Circle className="circle-home-4" />

      <div className="container-introduce">
        <Reveal>
          <h3>
            <RevealText text="Bonjour," />
          </h3>
        </Reveal>
        <Reveal>
          <h1 className="hello">
            <RevealText text="Je suis, Andriantsoa J.F." />
          </h1>
        </Reveal>
        <Reveal>
          <h2>
            <RevealText text="Développeur Web Full Stack" />
          </h2>
        </Reveal>
        <Reveal>
          <p>
            Développeur web passionné, je me spécialise dans la création
            d’expériences numériques interactives et modernes. Avec une
            expertise en React et Laravel, je combine créativité et compétences
            techniques pour transformer des idées en applications web
            performantes. Ma priorité est d'offrir des solutions sur mesure,
            innovantes, et adaptées aux besoins de chaque projet. Ensemble,
            donnons vie à vos idées et explorons de nouvelles possibilités
            numériques.
          </p>
        </Reveal>
        <RevealUpNoOverFlow>
          <a href="#resume">
            <motion.button
              className="btn-home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p>Résumé</p>
              <div>
                <i>
                  <MdArrowOutward />{" "}
                </i>
              </div>
            </motion.button>
          </a>
        </RevealUpNoOverFlow>
        <div className="container-social-link">
          <div className="content-social-icon">
            <RevealUpNoOverFlow>
              <a href="https://www.facebook.com/aiden.pearcemg">
                <button>
                  <i>
                    <FaFacebookF />
                  </i>
                </button>
              </a>
            </RevealUpNoOverFlow>
            <RevealUpNoOverFlow>
              <a href="https://github.com/Berzerker135">
                <button>
                  <i>
                    <FaGithub />
                  </i>
                </button>
              </a>
            </RevealUpNoOverFlow>
            <RevealUpNoOverFlow>
              <a href="https://www.linkedin.com/in/andrian-ntsoa-558a33316">
                <button>
                  <i>
                    <FaLinkedinIn />
                  </i>
                </button>
              </a>
            </RevealUpNoOverFlow>
            <RevealUpNoOverFlow>
              <a href="https://wa.me/261348982385">
                <button>
                  <i>
                    <FaWhatsapp />
                  </i>
                </button>
              </a>
            </RevealUpNoOverFlow>
          </div>
        </div>
      </div>
      <div className="wrapper-svg-home">
        <div className="container-svg-home">
          <RevealUpNoOverFlow>
            <SvgHome />
          </RevealUpNoOverFlow>
        </div>
      </div>
    </section>
  );
}
export default Home;
