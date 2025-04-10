"use client";
import Particles from "@tsparticles/react";
import { motion } from "framer-motion";

export default function MySkills() {

    // Animation variants for skill items
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    const skillSections = [
        {
            title: "Programming",
            skills: [
                { name: "C", color: "bg-blue-500", icon: "C" },
                { name: "C++", color: "bg-blue-400", icon: "C++" },
                { name: "Python", color: "bg-blue-600", icon: "Py" },
                { name: "Java", color: "bg-blue-700", icon: "Ja" },
                { name: "HTML", color: "bg-orange-500", icon: "HTML" },
                { name: "CSS", color: "bg-blue-500", icon: "CSS" },
                { name: "JavaScript", color: "bg-yellow-400", icon: "JS" },
                { name: "TypeScript", color: "bg-blue-600", icon: "TS" },
                { name: "Go Lang", color: "bg-cyan-400", icon: "Go" },
            ]
        },
        {
            title: "Frontend Stack",
            skills: [
                { name: "ReactJS", color: "bg-blue-400", icon: "⚛" },
                { name: "NextJS", color: "bg-black", icon: "N" },
                { name: "Redux", color: "bg-purple-500", icon: "Rx" },
                { name: "Aceternity UI", color: "bg-black", icon: ">" },
                { name: "Tailwind CSS", color: "bg-cyan-400", icon: "~" },
                { name: "SCSS", color: "bg-pink-500", icon: "S" },
                { name: "Framer Motion", color: "bg-black", icon: "FM" },
                { name: "Material UI", color: "bg-blue-500", icon: "M" },
                { name: "Shadcn UI", color: "bg-black", icon: "SH" },
            ]
        },
        {
            title: "Backend Stack",
            skills: [
                { name: "NodeJS", color: "bg-green-600", icon: "NJ" },
                { name: "ExpressJS", color: "bg-yellow-500", icon: "Ex" },
                { name: "PHP", color: "bg-purple-400", icon: "PHP" },
                { name: "MySQL", color: "bg-red-500", icon: "SQL" },
                { name: "NeonDB", color: "bg-green-400", icon: "ND" },
                { name: "MongoDB", color: "bg-green-500", icon: "MDB" },
                { name: "Postgres", color: "bg-blue-500", icon: "PG" },
                { name: "SupaBase", color: "bg-green-400", icon: "SB" },
                { name: "Redis", color: "bg-red-500", icon: "RD" },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "VS Code", color: "bg-blue-500", icon: "VS" },
                { name: "PhotoShop", color: "bg-blue-600", icon: "PS" },
                { name: "AfterEffects", color: "bg-purple-600", icon: "AE" },
                { name: "Lightroom", color: "bg-cyan-500", icon: "LR" },
                { name: "Premire Pro", color: "bg-purple-500", icon: "PR" },
                { name: "Figma", color: "bg-orange-500", icon: "FG" },
            ]
        },
        {
            title: "Platforms",
            skills: [
                { name: "Google Cloud", color: "bg-pink-800", icon: "GC" },
                { name: "Vercel", color: "bg-gray-700", icon: "VR" },
                { name: "Render", color: "bg-black", icon: "RN" },
                { name: "AWS", color: "bg-yellow-500", icon: "AWS" },
                { name: "Docker", color: "bg-blue-500", icon: "DK" },
                { name: "Postman", color: "bg-orange-500", icon: "PM" },
            ]
        }
    ];

    return (
        <div id="skills" className="relative w-full min-h-screen bg-black overflow-hidden py-16">
            {/* Star particles */}
            <Particles
                id="skillStars"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 80, density: { enable: true } },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.3, },
                        size: { value: 1 },
                        move: {
                            enable: true,
                            speed: 0.2,
                            direction: "none",
                            random: true,
                        },
                    },
                }}
                className="absolute inset-0 z-0"
            />

            {/* Animated particles that move from bottom to top */}
            <Particles
                id="floatingParticles"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 15, density: { enable: true } },
                        color: { value: ["#8b5cf6", "#60a5fa", "#10b981"] },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "top",
                            random: true,
                            straight: false,
                        }
                    }
                }}
                className="absolute inset-0 z-0"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h1
                    className="text-white text-7xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Skills
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h2 className="text-white text-xl font-medium mb-4 text-center">{section.title}</h2>

                            <motion.div
                                className="flex flex-wrap gap-2 justify-center"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {section.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className={`${skill.color} text-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md`}
                                        variants={item}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill.icon && <span className="text-sm font-bold">{skill.icon}</span>}
                                        <span className="text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}