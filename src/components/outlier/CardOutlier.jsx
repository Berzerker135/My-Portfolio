import "./CardOutlier.scss";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import RevealDownNoOverFlow from "../RevealDownNoOverFlow";

function CardOutlier({ icon, color, name }) {
  return (
    <RevealUpNoOverFlow>
      <div className="card-outlier">
        <i style={{ color: color }}>{icon}</i>
        <h2>{name}</h2>
      </div>
    </RevealUpNoOverFlow>
  );
}

export default CardOutlier;
