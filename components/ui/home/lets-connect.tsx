import { useState } from "react";
import Particles from "@tsparticles/react";
import { motion } from "framer-motion";

export default function ContactMe() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ email: "", subject: "", message: "" });
    };

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden py-16">
            {/* Star particles */}
            <Particles
                id="contactStars"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 80, density: { enable: true } },
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

            {/* Glowing orb effects */}
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl z-0" />

            {/* Animated connection points with lines */}
            <Particles
                id="connectionPoints"
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 10, density: { enable: true } },
                        color: { value: "#8b5cf6" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: "out"
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#8b5cf6",
                            opacity: 0.3,
                            width: 1
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            }
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: { opacity: 0.8 }
                            }
                        }
                    }
                }}
                className="absolute inset-0 z-0"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-16">
                    <motion.div
                        className="w-full md:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-white text-4xl font-bold mb-6">Let&apos;s Connect</h2>
                        <p className="text-gray-300 mb-8">
                            I&apos;m currently looking for new opportunities, my inbox is
                            always open. Whether you have a question or just want to
                            say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <motion.a
                                href="#"
                                className=" w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-white mb-2">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jacob@google.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}