import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [tooltipContent, setTooltipContent] = useState(""); // Contenido del tooltip
  const [showTooltip, setShowTooltip] = useState(false); // Estado para controlar la visibilidad del tooltip

  // Función para mostrar el tooltip con el contenido especificado
  const handleTooltip = (content) => {
    setTooltipContent(content);
    setShowTooltip(true);
  };

  // Función para ocultar el tooltip
  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ibrian</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <span className="icon-dev">👩‍💻</span>
            <p className="p-text-msg">Full-Stack</p>
            <p className="p-text-msg">Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          { image: images.sanity, tooltip: "Sanity tooltip content" },
          { image: images.react, tooltip: "React tooltip content" },
          { image: images.sass, tooltip: "Sass tooltip content" },
          // Agregar más objetos con la imagen y el contenido del tooltip
        ].map((item, index) => (
          <div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            onMouseEnter={() => handleTooltip(item.tooltip)}
            onMouseLeave={() => hideTooltip()}
          >
            <img src={item.image} alt={`circle-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
