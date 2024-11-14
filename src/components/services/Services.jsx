import "./Services.scss";
import Title from "../../utils/Title";
import { FaCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { useState } from "react";
import Reveal from "../Reveal";
import RevealToUp from "../RevealToUp";
import RevealText from "../RevealText";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import RevealDownNoOverFlow from "../RevealDownNoOverFlow";
import Circle from "../../utils/Circle";
import "./Responsive.scss";
import Dots from "../../utils/Dots";
import CardServices from "../services-card/CardServices";
import { MdWeb } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

function Services() {
  return (
    <section className="services" id="services">
      <Circle className="circle-service-1" />
      <div className="container-dots-serv">
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
      <div className="title-container">
        <Title title="Services" />
      </div>
      <div className="container-text-for-services">
        <Reveal>
          <h1>
            <RevealText text="Mes compétences à vos service" />
          </h1>
        </Reveal>
        <Reveal>
          <p>
            Découvrez les dervices que j'offre pour concrériser vos projets web, alliant expertise technique et solutions personnalisées.
          </p>
        </Reveal>
      </div>

      <div className="services-box">
        <div className="container-all-services">
          <CardServices
            icon={<MdWeb />}
            className='box-for-services'
            text="Conception d'applications complètes avec des fonctionnalités personnalisées, en utilisant Laravel pour le back-end et React pour front-end."
            title="Développement d'application web"
          />

          <CardServices
            icon={<TbDeviceMobileCode />}
            className='box-for-services'
            text="Création d'applications mobiles multiplateformes pour Android et iOS, permettant aux clients d'elargir leur portée."
            title="Développement mobile avec React Native"
          />

          <CardServices
            icon={<MdOutlineIntegrationInstructions />}
            className='box-for-services'
            text="Assurer la mise en place l'assemblage des élément visuels et fonctionnels d'un site,en veillant à ce qu'il soit fidèle aux maquettes et aux attentes du client; tout en respectant les standards d'accessibilité et de performance."
            title="Intégration web et optimisation"
          />
        </div>
      </div>
    </section>
  );
}
export default Services;
