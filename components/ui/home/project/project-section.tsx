"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../../pin";
import Particles from "@tsparticles/react"; // 👈 Add this

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "Blogster App",
            des: "This is a blogging app using diffie hellman key exchange on MERN Stack.",
            img: "/project/blogster.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "https://blog-ster.vercel.app/signup",
        },
        {
            id: 2,
            title: "Url Shortener App",
            des: "This Url Shortener app is built using NextJS, PostgreSQL and Supabase Database.",
            img: "/project/url.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supa.png"],
            link: "https://url-shortener-kappa-olive.vercel.app/",
        },
        {
            id: 3,
            title: "Recipe Finder",
            des: "A Recipe Finder app using Edamam API.",
            img: "/project/recipe.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
            link: "https://recipe-finder-psi-neon.vercel.app/",
        },
        {
            id: 4,
            title: "Banner Admin CRUD",
            des: "CRUD for Banner Admin.",
            img: "/project/banner.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
            link: "https://final-banner-count-qd3l.vercel.app/",
        },
    ];


    return (
        <div id="projects" className="relative  py-20">
            {/* 🟣 Particles Background */}
            <div className="fixed inset-0 -z-50 bg-gradient-to-b from-black via-[#0c0c1a] to-black" />


            <Particles
                id="tsparticles"
                options={{
                    fullScreen: false,
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: { enable: true },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 -z-10" // make particles behind everything
            />

            {/* Title */}
            <h1 className="md:text-5xl text-3xl lg:text-7xl pt-12 pb-8 text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
                My Projects
            </h1>

            {/* Project Cards */}
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 relative z-20">
                {projects.map((item) => (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.id}
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    >
                        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                            <PinContainer title="Link" href={item.link}>
                                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <img src="/bg.png" alt="bgimg" />
                                    </div>
                                    <img
                                        src={item.img}
                                        alt="cover"
                                        className="z-10 absolute bottom-0"
                                        style={{
                                            transform: "scale(1.4) rotate(5deg)",
                                        }}
                                    />
                                </div>

                                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <img src={icon} alt="icon5" className="p-2" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                                            Check Live Site
                                        </p>
                                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
