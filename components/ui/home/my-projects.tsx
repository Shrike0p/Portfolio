"use client";
import Particles from "@tsparticles/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MyProjects() {

    const projects = [
        {
            id: 1,
            title: "Secure Chat App",
            description: "This is a secure chat app using diffie hellman key exchange on MERN Stack.",
            image: "/api/placeholder/400/300",
            tags: ["React", "Tailwind", "TypeScript", "MongoDB", "Express"],
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Spotify Clone",
            description: "A Music Streaming and Broadcasting app created using NextJS, PostgreSQL and Supabase Database.",
            image: "/api/placeholder/400/300",
            tags: ["Next.js", "Tailwind", "PostgreSQL", "Supabase"],
            liveUrl: "#"
        },
        {
            id: 3,
            title: "CommuneSphere- Community Manager",
            description: "A SaaS Product for Community Management.",
            image: "/api/placeholder/400/300",
            tags: ["React", "Tailwind", "TypeScript", "Supabase", "Next.js"],
            liveUrl: "#"
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden py-16">
            {/* Star particles */}
            <Particles
                id="projectStars"
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

            {/* Shooting stars effect */}
            <Particles
                id="shootingStars"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 0 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 1 },
                        size: { value: 2 },
                        move: {
                            enable: true,
                            speed: 15,
                            direction: "bottom-right",
                            outModes: "out"
                        },
                        life: {
                            duration: { sync: true, value: 2 },
                            count: 1
                        },
                        trail: {
                            enable: true,
                            fillColor: "#000000",
                            length: 10
                        }
                    },
                    emitters: [
                        {
                            direction: "bottom-right",
                            life: { count: 0, duration: 0.1, delay: 0.1 },
                            rate: { delay: 3, quantity: 1 },
                            size: { width: 100, height: 0 },
                            position: { x: 0, y: 0 }
                        },
                        {
                            direction: "bottom-right",
                            life: { count: 0, duration: 0.1, delay: 0.1 },
                            rate: { delay: 4, quantity: 1 },
                            size: { width: 100, height: 0 },
                            position: { x: 50, y: 10 }
                        }
                    ]
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
                    My Projects
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                                {index === 1 && (
                                    <div className="absolute right-3 top-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm rounded-full">
                                        Link
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                {/* Project technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <motion.a
                                    href={project.liveUrl}
                                    className="inline-flex items-center gap-1 text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-lg font-medium"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Check Live Site
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}