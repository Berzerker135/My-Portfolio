import "./CardServices.scss";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import { useState } from "react";

function CardServices({ icon, title, text, className }) {
  const [moreService, setMoreService] = useState(false);
  const handleClick = () => {
    setMoreService(true);
  };
  return (
    <RevealUpNoOverFlow>
      <div className={className}>
        <div className="go-corner"></div>
        <i>{icon}</i>
        <h2>{title}</h2>
        <div
          className={
            moreService
              ? "container-more-service min-more"
              : "container-more-service"
          }
          onClick={handleClick}
        >
          <p>
            {text}
          </p>
        </div>
      </div>
    </RevealUpNoOverFlow>
  );
}

export default CardServices;
