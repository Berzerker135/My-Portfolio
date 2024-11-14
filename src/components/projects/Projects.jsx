import "./Projects.scss";
import Title from "../../utils/Title";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Reveal from "../Reveal";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import RevealText from "../RevealText";
import Card from "../card/Card";
import "./Responsive.scss";
import Circle from "../../utils/Circle";
import Dots from "../../utils/Dots";
import carzone from "../../../public/assets/image/carzone.png";

function Projects() {
  return (
    <section className="projects" id="project">
      <Circle className="circle-projet-1" />
      <Circle className="circle-projet-2" />
      <div className="container-dots-circle-project">
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
        <Title title="Projets" />
      </div>
      <div className="container-latest-project">
        <Reveal>
          <h3>
            <RevealText text="Réalisations Récentes" />
          </h3>
        </Reveal>
        <Reveal>
          <p className="para-project">Découvrez mes récentes réalisations en développement web. Chaque projet est conçus pour offrir une expérience utilisateur de qualité, alliant créativité et expertise technique.</p>
        </Reveal>
        <div className="container-project">
          <Card image={carzone} title='Carzone' para="Ce Projets de location de voiture est actuellement en cours de développement et d'amélioration. L'objectif est de créer une plateforme intuitive et performante, facilitant la réservation de véhicules et offrant une expérience utilisateur fluide et agréable." />
        </div>
      </div>
    </section>
  );
}
export default Projects;
