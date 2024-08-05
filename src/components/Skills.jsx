import Pdf from "./assets/Prakhar_Singh_Resume_MERN.pdf";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export const Skills=()=>{
    return <div>
        <hr
          className="pt-10 border-t border-[#a8a4f4] opacity-35  "
        ></hr>
        <h1 className="pt-14 pb-8 text-4xl font-bold bg-[#0d2438] text-white">
          Skills
        </h1>
        <div className="grid grid-cols-7 justify-items-center ml-10  text-white h-32 subpixel-antialiased pt-8 ">
          <div></div>
          <div className="relative w-16 h-20 group">
            <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaReact
                alt=""
                className="absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 
"
              />
            </motion.image>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              React
            </div>
          </div>

          <div className="relative w-16 h-20 group">
            <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TbBrandLeetcode
                alt=""
                className="text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
            </motion.image>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Data Structures
            </div>
          </div>

          <div className="relative w-16 h-20 group">
            <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SiTailwindcss
                alt=""
                className="
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
            </motion.image>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              TailwindCSS
            </div>
          </div>

          <div className="relative w-16 h-20 group">
            <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaPython
                alt=""
                className="text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
            </motion.image>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Python
            </div>
          </div>

          <div className="relative w-16 h-20 group">
            <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiFigma
                alt=""
                className="
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
            </motion.image>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              UI/UX Design
            </div>
            <div></div>
          </div>
          </div>
    </div>
}