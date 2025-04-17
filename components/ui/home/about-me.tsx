"use client"
import { useState } from "react";
import Particles from "@tsparticles/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Prakhar from "@/public/prakhar-singh.jpeg";

export default function AboutMe() {
    const [skillTab, setSkillTab] = useState("Skills");


    return (
        <div id="about" className="relative w-full min-h-screen bg-black overflow-hidden py-16">
            {/* Star particles */}
            <Particles
                id="aboutStars"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 100, density: { enable: true } },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.3 },
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

            {/* Glowing orb in bottom left */}
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h1
                    className="text-white text-7xl font-bold text-center mb-24"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-lg overflow-hidden border border-gray-800 shadow-lg shadow-cyan-500/10">
                            <div className="w-full aspect-[4/3] relative">
                                <Image
                                    src={Prakhar}
                                    alt="Profile Photo"
                                    layout="fill"
                                    objectFit="contain"
                                    className="z-10"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 text-white"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-lg mb-8">
                            I am a full stack web developer with a passion for creating interactive
                            and responsive web applications. I have experience working with
                            JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
                            HTML, CSS, and Git. I am a quick learner and I am always looking to
                            expand my knowledge and skill set. I am a team player and I am excited
                            to work with others to create amazing applications.
                        </p>

                        <div className="mb-8">
                            <div className="flex border-b border-gray-700 mb-6">
                                {["Skills", "Education", "Certifications"].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-2 mr-4 font-medium ${skillTab === tab
                                            ? "text-purple-400 border-b-2 border-purple-400"
                                            : "text-gray-400 hover:text-gray-300"
                                            }`}
                                        onClick={() => setSkillTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {skillTab === "Skills" && (
                                <motion.ul
                                    className="list-disc pl-5 space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>PostgreSQL</li>
                                    <li>Sequelize</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                </motion.ul>
                            )}

                            {skillTab === "Education" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="mb-2">Bachelor of Technology in Computer Science</p>
                                    <p className="text-gray-400">Kalinga Institute of Industrial Technology, 2021-2025</p>
                                </motion.div>
                            )}

                            {skillTab === "Certifications" && (
                                <motion.ul
                                    className="space-y-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <li>
                                        <p className="font-medium">Full Stack Development</p>
                                        <p className="text-gray-400">Coding Bootcamp - 2022</p>
                                    </li>
                                    <li>
                                        <p className="font-medium">AWS Cloud Practitioner</p>
                                        <p className="text-gray-400">Amazon Web Services - 2023</p>
                                    </li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}