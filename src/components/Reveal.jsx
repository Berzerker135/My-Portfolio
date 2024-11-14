import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from 'react';

function Reveal({ children }) {

  //Reveal Element
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }else {
        setInView(false);
      }
    },
    { threshold: 0.5 }
    );

    if(ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }

  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', width: 'fit-content' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={inView ? 'visible': 'hidden'}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="slide-in-reveal"
      >
      </motion.div>
    </div>
  )
}

export default Reveal;