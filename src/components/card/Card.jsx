import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Card.scss";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Card({ id, image, title, para, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickToShowModal = () => {
    setIsModalOpen(true);
  };

  const handleClickToHiddeModal = () => {
    setIsModalOpen(false);
  };

  const [openPara, setOpenPara] = useState(false);
  const handleClick = () => {
    setOpenPara(true);
  };

  return (
    <RevealUpNoOverFlow>
      <div className="project-box">
        <div className="project">
          <div
            className={
              isModalOpen
                ? "container-info-project toShowModal"
                : "container-info-project"
            }
          ></div>
          <div className="container-project-img">
            <img src={image} alt="" />
          </div>
          <div className="content-title-project">
            <h1>{title}</h1>
            <div
              className={
                openPara
                  ? "container-para-project open-para-project"
                  : "container-para-project"
              }
              onClick={handleClick}
            >
              <p>
                {para}
              </p>
            </div>
            <div className="container-btn-project">
              <a href={link}>
                <button className="btn-project-git">
                  <p>En cours...
                  {/* Voir dans Github */}
                  </p>
                  <i>
                    {/* <FaGithub /> */}
                  </i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealUpNoOverFlow>
  );
}

export default Card;
