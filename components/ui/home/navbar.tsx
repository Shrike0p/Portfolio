"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="backdrop-blur-sm px-6 py-3 rounded-none lg:rounded-full bg-transparent lg:bg-gray-900/50">
            <div className="flex justify-end items-end relative">

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-8">
                    {["home", "about", "skills", "projects", "contacts"].map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white sm:hidden focus:outline-none relative z-50"
                >
                    <motion.div
                        key={isOpen ? "close" : "menu"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden mt-4 flex flex-col gap-4 items-end text-right px-2"
                    >
                        {["home", "about", "skills", "projects", "contacts"].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                    className="text-white text-lg hover:text-gray-300 transition-colors"
                                    onClick={() => setIsOpen(false)} // close on link click
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
