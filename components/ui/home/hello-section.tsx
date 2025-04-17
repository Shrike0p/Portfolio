"use client";
import { useState, useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Background from "./background";
import Image from "next/image";
import Prakhar from "@/public/prakhar-singh.jpeg";
import Navbar from "./navbar";

export default function PortfolioIntro() {
    const [animationPhase, setAnimationPhase] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showBackground, setShowBackground] = useState(true);
    const greetings = ["Hello", "Hallo", "Hola", "Bonjour", "Hej", "Hoi"];
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Phase 0: Word highlighting animation
        if (animationPhase === 0) {
            const highlightInterval = setInterval(() => {
                setCurrentWordIndex((prev) => {
                    if (prev === greetings.length - 1) {
                        clearInterval(highlightInterval);
                        setTimeout(() => setAnimationPhase(1), 100);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 600);

            return () => clearInterval(highlightInterval);
        }

        // Phase 1: Prepare for spotlight
        if (animationPhase === 1) {
            setTimeout(() => {
                setAnimationPhase(2); // Move to spotlight phase
                // Start fading out background component
                setTimeout(() => setShowBackground(false), 1000);
            }, 2000);
        }
    }, [animationPhase, greetings.length]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (animationPhase < 2 || !spotlightRef.current) return;

            // Use e.clientX and e.clientY to get mouse position
            const x = e.clientX;
            const y = e.clientY;

            spotlightRef.current.style.background =
                `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Trigger once to set initial position using the window dimensions
        const initialX = window.innerWidth * 0.2;
        const initialY = window.innerHeight * 0.25;

        // Check if spotlightRef.current is not null before accessing it
        if (spotlightRef.current) {
            spotlightRef.current.style.background =
                `radial-gradient(circle at ${initialX}px ${initialY}px, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`;
        }

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [animationPhase]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Star particles - white */}
            <Particles
                id="starParticles"
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "#000000" } },
                    particles: {
                        number: { value: 800, density: { enable: true } },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.2 },
                        size: { value: 1 },
                        move: { enable: true, speed: 0.3 },
                    },
                    interactivity: {
                        modes: { repulse: { distance: 100 } },
                    },
                }}
                className="absolute inset-0 z-0"
            />

            {/* Shooting Stars - only visible during phase 1 */}
            {animationPhase === 1 && (
                <Particles
                    id="shootingStars"
                    options={{
                        fullScreen: { enable: false },
                        fpsLimit: 120,
                        particles: {
                            number: {
                                value: 0
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 1
                            },
                            size: {
                                value: 2
                            },
                            move: {
                                enable: true,
                                speed: 30,
                                direction: "right",
                                outModes: "out"
                            },
                            life: {
                                duration: {
                                    sync: true,
                                    value: 5
                                },
                                count: 1
                            },
                            trail: {
                                enable: true,
                                fillColor: "#000000",
                                length: 20
                            }
                        },
                        emitters: [
                            {
                                direction: "top-right",
                                life: {
                                    count: 0,
                                    duration: 0.1,
                                    delay: 0.1
                                },
                                rate: {
                                    delay: 1,
                                    quantity: 1
                                },
                                size: {
                                    width: 100,
                                    height: 10
                                },
                                position: {
                                    x: 0,
                                    y: 50
                                }
                            },
                            {
                                direction: "right",
                                life: {
                                    count: 0,
                                    duration: 0.1,
                                    delay: 0.1
                                },
                                rate: {
                                    delay: 1.5,
                                    quantity: 1
                                },
                                size: {
                                    width: 100,
                                    height: 10
                                },
                                position: {
                                    x: 0,
                                    y: 25
                                }
                            },
                            {
                                direction: "top-right",
                                life: {
                                    count: 0,
                                    duration: 0.1,
                                    delay: 0.1
                                },
                                rate: {
                                    delay: 2,
                                    quantity: 1
                                },
                                size: {
                                    width: 100,
                                    height: 10
                                },
                                position: {
                                    x: 0,
                                    y: 75
                                }
                            }
                        ]
                    }}
                    className="absolute inset-0 z-1"
                />
            )}

            {/* Background SVG - fades out after phase 1 */}
            {showBackground && (
                <motion.div
                    className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-0"
                    animate={{ opacity: animationPhase >= 2 ? 0 : 1 }}
                    transition={{ duration: 1 }}
                >
                    <Background className="w-full h-full" />
                </motion.div>
            )}

            {/* Spotlight overlay - only visible in phase 2 */}
            {animationPhase >= 2 && (
                <div
                    ref={spotlightRef}
                    className="absolute inset-0 z-1 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
                        width: '100%',
                        height: '100%'
                    }}
                />
            )}

            {/* Greeting text - only visible in phase 0 */}
            <motion.div
                className="flex items-center justify-center h-full relative z-10"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: animationPhase >= 1 ? 0 : 1,
                    y: animationPhase >= 1 ? -20 : 0
                }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-white text-6xl font-bold select-none">
                    {greetings.map((word, index) => (
                        <motion.span
                            key={index}
                            className="inline-block mx-2"
                            initial={{ opacity: 0.1 }}
                            animate={{
                                opacity: index === currentWordIndex
                                    ? 1
                                    : index < currentWordIndex
                                        ? 0.4
                                        : 0.1
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
            </motion.div>

            {/* Personal info with spotlight and typewriter - only visible in phase 2 */}
            {animationPhase >= 2 && (
                <div className="absolute inset-0 flex items-start justify-between px-12 lg:px-32 pt-32 lg:pt-36 z-20">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-2">
                            Hello, I &apos; m
                        </h2>
                        <h1 className="text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
                            <TypeAnimation
                                sequence={[
                                    'Prakhar Singh', 2000, // First sequence
                                    'Frontend Developer', 2000, // Second sequence
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </h1>
                        <div className="mt-4 mb-10">
                            <TypeAnimation
                                sequence={[
                                    500,
                                    'Just a black screen enthusiast',
                                    1000,
                                    'Just a black screen enthusiast, crafting bugs professionally and fixing them passionately',
                                    1000,
                                    "Just a black screen enthusiast, crafting bugs professionally and fixing them passionately. Life has issues ? Relax, I'll build software for that.",
                                ]}
                                wrapper="p"
                                speed={50}
                                className="text-gray-300 text-lg lg:text-xl max-w-2xl"
                                style={{ whiteSpace: 'pre-line' }}
                                repeat={0}
                            />
                        </div>

                        <motion.div
                            className="flex space-x-4 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 6 }}
                        >
                            <motion.button
                                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="https://drive.google.com/file/d/1tmSLyzSco6W2Z7qi8fwmQOvm5f8-lxCZ/view?usp=sharing" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                                    <span className="font-bold"> View CV</span>
                                </a>
                            </motion.button>
                            <motion.div
                                className="flex space-x-4 items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 6.5 }}
                            >
                                <a href="http://github.com/shrike0p" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/prakhar-singh-01/" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hidden lg:block"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-full overflow-hidden border-2 border-gray-700">
                            {/* Replace with your actual image */}
                            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                <Image
                                    src={Prakhar}
                                    alt="Profile Picture"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Stats section - appears after typewriter effect */}
            {animationPhase >= 1 && (
                <motion.div
                    className="absolute bottom-16 left-0 right-0 flex justify-center items-center space-x-4 lg:space-x-16 px-8 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 7 }}
                >
                    <div className="text-center">
                        <h3 className="text-sm lg:text-4xl font-bold text-white">1+</h3>
                        <p className="text-xs lg:text-base text-gray-400 mt-2">Experience</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm lg:text-4xl font-bold text-white">12+</h3>
                        <p className="text-xs lg:text-base text-gray-400 mt-2">Projects</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm lg:text-4xl font-bold text-white">15+</h3>
                        <p className="text-xs lg:text-base text-gray-400 mt-2">Events Covered</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm lg:text-4xl font-bold text-white">400+</h3>
                        <p className="text-xs lg:text-base text-gray-400 mt-2">Coding Hours</p>
                    </div>
                </motion.div>
            )}

            {/* Navigation - appears with main content */}
            {animationPhase >= 2 && (
                <motion.nav
                    className="absolute top-0 left-0 right-0 p-6 flex justify-center z-40"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3.5 }}
                >
                    <div className="w-full h-full relative">
                        <Navbar />
                    </div>
                </motion.nav>
            )}
        </div>
    );
}