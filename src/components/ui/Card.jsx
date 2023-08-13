import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const Card = (props) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-250px 0px",
    once: true,
  });

  const textColours = {
      green: "text-[#08d99d]",
      purple: "text-[#CB04DC]",
      pink: "text-[#FC0A7C]",
      yellow: "text-[#D9D223]",
      blue: "text-[#0568FD]",
  }

  return (
    <motion.div 
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: 1, transform: isInView ? "none":"translateY(-100px)", opacity: isInView ? 1:0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }}
      className="card w-96 h-80 bg-base-100 shadow-xl"
    >
    <div className="card-body gap-4">
        <div className="badge badge-neutral text-xs sm:text-lg p-4">{props.badge}</div>
        <h2 className={`card-title ${textColours[props.colour]}`}>{props.heading}</h2>
        <p>{props.details}</p>
        <div className="card-actions">
        <a href='/' className={`${textColours[props.colour]}`} >Learn more →</a>
        </div>
    </div>
    </motion.div>
  )
}

export default Card