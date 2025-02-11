import React from "react";
import {motion} from "framer-motion" 

const pageVariants = {
  initial: { opacity: 1, y: "-100vh"},
  animate: { opacity: 1, y: "100vh"},
  exit: { opacity: 0, y: 0},
};

const BackgroundAnimation = () => {
  return (
    <motion.div
      className="black-motion"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default BackgroundAnimation;