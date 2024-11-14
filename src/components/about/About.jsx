import me from "../../../public/assets/image/me.jpg";
import Circle from "../../utils/Circle";
import Dots from "../../utils/Dots";
import { FiDownloadCloud } from "react-icons/fi";
import Title from "../../utils/Title";
import "./About.scss";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Reveal from "../Reveal";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import { motion } from "framer-motion";
import "./Responsive.scss";

function About() {
  return (
    <section className="about" id="about">
      <Circle className="circle-about-1" />
      <div className="container-about">
        <div className="container-title-for-about">
          <Title title="À propos" />
        </div>
        <Reveal>
          <h3>
            Créer des Expériences Utilisateurs Riches avec <span>React et Laravel</span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="para-about">
          Je m'appelle Andriantsoa Jean Fidel, développeur web passionné avec un an d'expérience dans la création de solutions numériques dynamiques et innovantes. Récemment certifié par Hopes Formation à Andavamba, un centre spécialisé dans le développement web, j'ai eu l'opportunité d'approfondir mes compétences et de renforcer mes connaissances techniques dans des environnements professionnels. Grâce à cette formation rigoureuse, j'ai perfectionné mes compétences en React pour le frontend, ainsi qu'en Laravel pour le backend, me permettant de créer des applications web modernes, performantes, et bien structurées. En tant que développeur en formation continue, je suis constamment en quête d'apprendre et de maîtriser les nouvelles technologies pour offrir des solutions à la fois créatives et robustes, adaptées aux besoins de chaque projet.
          </p>
        </Reveal>
        <div className="button-home-container">
          <RevealUpNoOverFlow>
            <a href="../../../public/CV de Ntsu.pdf" download='Mon-Cv.pdf' style={{ display: 'block', width: 'fit-content' }} >
              <motion.button
                className="download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p>Télécharger CV</p>
                <div>
                  <i>
                    <FiDownloadCloud />{" "}
                  </i>
                </div>
              </motion.button>
            </a>
          </RevealUpNoOverFlow>
        </div>
        <div className="content-resume">
          <Reveal>
            <div className="box-1">
              <p>Nom:</p>
              <span>Jean Fidèle</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="box-2">
              <p>Prenom:</p>
              <span>Andriantsoa</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="box-3">
              <p>Age:</p>
              <span>23</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="box-4">
              <p>Adresse:</p>
              <span>MB 852 Mahabo</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="box-5">
              <p>Lieux:</p>
              <span>Andoharanofotsy</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="box-6">
              <p>Tel:</p>
              <span>+261 348982385</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="image-wrapper-about">
        <RevealUpNoOverFlow>
          <motion.div
            className="container-motion"
            initial={{ y: 0 }}
            animate={{ y: [2, -20, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: "revese",
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [5, 15, 5] }}
              transition={{
                repeat: Infinity,
                repeatType: "revese",
                duration: 5,
                ease: "easeInOut",
                repeatDelay: 5,
              }}
              className="motion"
            ></motion.div>

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "revese",
                duration: 5,
              }}
              className="motion"
            ></motion.div>
            <motion.div className="box-img-about">
              <img src={me} loading="lazy" />
            </motion.div>
          </motion.div>
          <div className="container-dots-about">
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
            <Dots className={"dot-for-about"} />
          </div>
        </RevealUpNoOverFlow>
      </div>
    </section>
  );
}
export default About;
