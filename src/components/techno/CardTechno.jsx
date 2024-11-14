import "./CardTechno.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";

function CardTechno({ progress, color, name, icon }) {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(circleRef.current);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <RevealUpNoOverFlow>
      <div className="progress-container">
        <i style={{ color: color }}>{icon}</i>
        <h2 className="react">{name}</h2>
        <div className="progress-bar-container">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 120 120"
            className="svg-progress"
            ref={circleRef}
          >
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="10"
            />
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              radius="50px"
              stroke={color}
              strokeWidth="10"
              fill="#050D2E"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset: isVisible ? offset : circumference }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              strokeLinecap="round"
            />
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#6c757d"
              className="text-progress"
            >
              {`${progress}%`}
            </text>
          </svg>
        </div>
      </div>
    </RevealUpNoOverFlow>
  );
}

export default CardTechno;
