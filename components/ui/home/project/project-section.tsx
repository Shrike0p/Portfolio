"use client";

import { FaLocationArrow } from "react-icons/fa6";


import { PinContainer } from "../../pin";


const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "Secure Chat App",
            des: "This is a secure chat app using diffie hellman key exchange on MERN Stack.",
            img: "/images/projects/chat-project.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "https://secure-chat-app-1uls.onrender.com/",
        },
        {
            id: 2,
            title: "Spotify Clone",
            des: "A Music Streaming and Broadcasting app created using NextJS, PostgreSQL and Supabase Database.",
            img: "/images/projects/spotify-project.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supa.png",],
            link: "https://spotifyclone-pratik.vercel.app",
        },
        {
            id: 3,
            title: "CommuneSphere- Community Management App",
            des: "A SaaS Product for Community Management.",
            img: "/images/projects/commune-project.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
            link: "https://github.com/pratik123-coder/CommuneSphere",
        },
        {
            id: 4,
            title: "Aceternity UI Project",
            des: "Testing Aceternity UI components and deploying it",
            img: "/images/projects/music-project.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "/ui.apple.com",
        },
        {
            id: 5,
            title: "Pratijja 2024",
            des: "Website for Pratijja Event. Registration Forms and Dates.",
            img: "/images/projects/pratijja-project.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "https://pratijja.org/",
        },
        {
            id: 6,
            title: "Razorpay Payment SDK",
            des: "Razorpay payment gateway Backend Code.",
            img: "/images/projects/Razorpay.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "https://github.com/pratik123-coder/Razorpay",
        },
    ];
    return (
        <div className="py-20">
            <h1 className="md:text-5xl text-3xl lg:text-7xl pt-12 pb-8 text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
                My Projects
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title="Link"
                            href={item.link}
                        >
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
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;