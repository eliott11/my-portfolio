import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { links } from "../constants";
import { SectionWrapper } from "../hoc";

const LinkCard = ({ index, title, href, image }) => (
  <a className="xs:w-[300px] w-full" href={href} target="_blank">
  <Tilt href={href}>
      <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)} animate={{ opacity: 1 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      > 
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-contain"
          />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  </a>
);

const Links = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Find me on the web</p>
        <h2 className={`${styles.sectionHeadText}`}>Links.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {links.map((link, index) => (
          <LinkCard key={`link-${index}`} index={index} {...link} />
        ))}
      </div>
      
    </> 
  );
}

export default SectionWrapper(Links, "link");