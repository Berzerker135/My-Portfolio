import "./Resume.scss";
import Title from "../../utils/Title";
import { FaCheck } from "react-icons/fa6";
import Reveal from "../Reveal";
import Glow from "../../utils/Glow";
import RevealText from "../RevealText";
import "./Responsive.scss";
import Dots from "../../utils/Dots";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container-dots-resume">
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </div>
      <div className="container-dots-circle-resume">
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </div>

      <div className="title-container">
        <Title title="Résumé" />
      </div>
      <div className="text-resume-container">
        {/* <Reveal>
          <p className="text-resume">
            Je vous offre des services complets de développement web pour
            transformer vos idées en sites web performants et attractifs.
          </p>
        </Reveal> */}
      </div>
      <div className="container-for-all-resume">
        <div className="list-1">
          <Reveal>
            <div className="title-service-offer">
              <span className="check">
                <FaCheck className="check-icon" />
              </span>
              <h3>
                <RevealText text="Formation" />
              </h3>
            </div>
          </Reveal>
          <div className="details-service">
            <Reveal>
              <div className="container-date">
                <p>09 Séptembre 2023 - 25 Juin 2024</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="para-resume">
                <span>Hopes Formation : </span>
                Hopes Formation m'a offert une formation complète, en commençant
                par les fondamentaux du développement web : HTML, CSS et
                JavaScript pour le front-end, puis PHP et MySQL pour le
                back-end. La structure du programme est pensée pour initier les
                novices en développement web, avec une progression vers des
                outils et frameworks avancés tels que React pour la création
                d’interfaces utilisateur réactives et Laravel pour la gestion
                sécurisée et efficace des bases de données.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="list-1">
          <Reveal>
            <div className="title-service-offer">
              <span className="check">
                <FaCheck className="check-icon" />
              </span>
              <h3>
                <RevealText text="Experience" />
              </h3>
            </div>
          </Reveal>
          <div className="details-service">
            <Reveal>
              <div className="container-date">
                <p>27 Juin 2024 - 29 Août 2024</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="para-resume">
                <span>Nir’info : </span>
                Mon parcours professionnel c'est enrichi grâce à un stage
                passionnant chez Nirinfo, un centre spécialisé dans le
                développement web et d'applications. Cette expérience m'a permis
                de développer des compétences pratiques dans la création
                d'applications mobiles avec React Native, un framework puissant
                permettant de construire des applications mobiles performantes
                et fluides.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="list-1">
          <Reveal>
            <div className="title-service-offer">
              <span className="check">
                <FaCheck className="check-icon" />
              </span>
              <h3>
                <RevealText text="Diplôme" />
              </h3>
            </div>
          </Reveal>
          <div className="details-service">
            <Reveal>
              <div className="container-date">
                <p>25 Juin 2024 </p>
              </div>
            </Reveal>
            <Reveal>
              <p className="para-resume">
                <span>Certificat en Développement Web</span> <br />
                J'ai reçus mon certificat en développement web chez Hopes
                Formation; un centre spécialisé offrant une formation 100%
                pratique avec des enseignants expérimentés. Cette expérience m'a
                permis de développer des compétences concrètes et directement
                applicables.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="list-1">
          <Reveal>
            <div className="title-service-offer">
              <span className="check">
                <FaCheck className="check-icon" />
              </span>
              <h3>
                <RevealText text="Centres D’intérêt" />
              </h3>
            </div>
          </Reveal>
          <div className="details-service">
            <Reveal>
              <ul>
                <li>Mangas (One piece, Naruto, SNK)</li>
                <li>Jeux vidéo (RPG, FPS)</li>
                <li>Sports(Basketball)</li>
                <li>Lire des livres</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
