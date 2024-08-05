import Pdf from "./assets/Prakhar_Singh_Resume_MERN.pdf";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

import React from 'react';
import SkillsCard from './Skillcard';


const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['ReactJS', 'ExpressJS', 'NodeJS', 'JavaScript', 'Tailwind CSS', 'Bootstrap CSS'],
      imageUrl: '../public/web.png'  // Replace with your image path
    },
    {
      title: 'Machine Learning',
      skills: ['Python', 'NumPy', 'Pandas'],
      imageUrl: '/ml.png'  // Replace with your image path
    },
    {
      title: 'Data Structures and Algorithm',
      skills: ['C', 'C++'],
      imageUrl: '/path/to/cloud-computing-logo.png'  // Replace with your image path
    },
    {
      title: 'Cloud Computing',
      skills: ['AWS'],
      imageUrl: '/path/to/cloud-computing-logo.png'  // Replace with your image path
    }
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skillCategories.map((category, index) => (
        <SkillsCard key={index} title={category.title} skills={category.skills} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default Skills;


