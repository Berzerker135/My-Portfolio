import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const RevealText = ({ text, classSpan }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.09,
                duration: 0.1,
            }
        })
    }

    return (
        <div ref={ref} style={{ overflow: 'hidden', display: 'inline-block' }}>
            {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={letterVariants}
                    style={{
                        display: 'inline-block',
                         whiteSpace: 'pre',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    )

}

export default RevealText;