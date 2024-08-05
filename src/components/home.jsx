import Pdf from "./assets/Prakhar_Singh_Resume_MERN.pdf";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

import React, { useEffect, useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { ProjectSection } from "./ProjectSection";
import { Skills } from "./Skills";

const AnimatedText = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    return controls.stop;
  }, []);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
};

export default AnimatedText;

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-roboto">
      <div>
        <div className="flex justify-between items-center bg-[#0d2438] text-white pb-8 pt-8 ">
          <div className="text-left w-full ml-32">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold text-left pb-4">
                Hi, I am{" "}
                <span
                  className="text-[#a8a4f4]
"
                >
                  Prakhar
                </span>
              </h1>
            </motion.div>

            <h1 className="text-3xl font-bold text-left pb-8 pt-2">
              <AnimatedText text="Software Developer and Designer" />
            </h1>

            <button
              className="hover:underline text-[#a8a4f4]
 bg-transparent border border-solid border-[#a8a4f4]
 rounded py-2 px-4 hover:bg-[#a8a4f4]
 hover:text-white"
              onClick={() => window.open(Pdf, "_blank")}
            >
              Download CV
            </button>
          </div>

          <img
            src="/landingimage.png"
            alt="'Profile picture'"
            className="h-[50vh] rounded-md pr-24 hidden md:flex"
          />
          <div className="h-8"></div>
        </div>
        <Skills/>
        <ProjectSection/>
      
      </div>
    </div>
  );
}


