import "./Skills.scss";
import Title from "../../utils/Title";
import { FaReact } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Glow from "../../utils/Glow";
import Reveal from "../Reveal";
import RevealToUp from "../RevealToUp";
import RevealToDown from "../RevealToDown";
import RevealText from "../RevealText";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import RevealDownNoOverFlow from "../RevealDownNoOverFlow";
import Circle from "../../utils/Circle";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Responsive.scss";
import CardTechno from "../techno/CardTechno";
import CardOutlier from "../outlier/CardOutlier";
import Dots from "../../utils/Dots";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import {DiPhotoshop } from 'react-icons/di';
import {DiIllustrator } from 'react-icons/di';
import {DiMysql } from 'react-icons/di';



function Skills() {
  const [isProgress, setIsProgress] = useState(false);
  const refProgress = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProgress(true);
            // observer.unobserve(entry.target);
          } else {
            setIsProgress(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (refProgress.current) {
      observer.observe(refProgress.current);
    }

    return () => {
      if ([refProgress].current) {
        observer.unobserve(refProgress.current);
      }
    };
  }, []);

  return (
    <section className="skills" id="skill">
      <Circle className="circle-skills-1" />
      <Circle className="circle-skills-2" />

      <div className="container-dots-circle-skills">
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
        <Title title="Compétences" />
      </div>

      <div className="container-techno">
        <div className="container-title-skills">
          <Reveal>
            <h1>
              <RevealText text="Technologies" />
            </h1>
          </Reveal>
        </div>
        <div className="container-all-techno">
          <CardTechno
            progress="100"
            color="#e34f26"
            name="HTML"
            icon={<FaHtml5 />}
          />
          <CardTechno
            progress="95"
            color="#1572b6"
            name="CSS"
            icon={<FaCss3Alt />}
          />
          <CardTechno
            progress="95"
            color="#CC6699"
            name="Sass"
            icon={<FaSass />}
          />
          <CardTechno
            progress="75"
            color="#7952b3"
            name="Bootstrap"
            icon={<FaBootstrap />}
          />
          <CardTechno
            progress="80"
            color="#f7df1e"
            name="JavaScript"
            icon={<FaJs />}
          />{" "}
          <CardTechno
            progress="70"
            color="#61dafb"
            name="React"
            icon={<FaReact />}
          />{" "}
          <CardTechno
            progress="50"
            color="#777BB4"
            name="PHP"
            icon={<FaPhp />}
          />{" "}
          <CardTechno
            progress="60"
            color="#ff2d20"
            name="Laravel"
            icon={<FaLaravel />}
          />
          <CardTechno
            progress="40"
            color="#61dafb"
            name="React Native"
            icon={<TbBrandReactNative />}
          />
        </div>
      </div>
      <div className="container-outlier">
        <div className="title-outlier">
          <Reveal>
            <h1>
              <RevealText text="Outils" />
            </h1>
          </Reveal>
        </div>
        <div className="container-all-outlier">
          <CardOutlier icon={<TbBrandVscode />} color="#6d7b8f" name="Vscode" />
          <CardOutlier icon={<DiPhotoshop />} color="#6d7b8f" name="Photoshop" />
          <CardOutlier icon={<DiIllustrator />} color="#6d7b8f" name="Illustrator" />
          <CardOutlier icon={<DiMysql />} color="#6d7b8f" name="Mysql" />
          <CardOutlier icon={<FaGithub />} color="#6d7b8f" name="Github" />
        </div>
      </div>
    </section>
  );
}
export default Skills;
