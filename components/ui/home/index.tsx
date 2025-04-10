import React from "react";
import Background from "./background";

const Section = () => {
    return (
        <section className="relative overflow-hidden w-screen h-[100vh] py-[84px] lg:pt-14 md:pt-[52px]">
            <div className="relative flex justify-center items-center w-full h-full">
                <div className="relative z-10 pb-[291px] pt-[324px] text-center">
                    <h2 className="cracks-title mx-auto max-w-4xl font-sans-titles text-6xl leading-extra-tight tracking-tight drop-shadow-title lg:max-w-xl lg:text-5xl md:text-4xl sm:max-w-lg sm:text-3xl">
                        There are millions of dollars falling through the cracks
                    </h2>
                    <p className="mt-6 text-xl tracking-wider text-gray-80 lg:text-18 md:mt-4 md:text-14 sm:mt-3 sm:px-8">
                        Everyone has bad data. Financial leaders need to step up and fix it.
                    </p>
                    <div className="ellipse-primary absolute left-1/2 top-[50%] scale-[97] opacity-15 blur-[2px] lg:scale-[72] md:scale-[54]"></div>
                </div>

                <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-0">
                    <Background className="w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default Section;
