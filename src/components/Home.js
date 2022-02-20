import React from "react";
import Topbar from "./Topbar";

const Home = () => {
    return (
        <div role="region" className="w-full h-full flex justify-center items-center bg-banner-image bg-cover bg-center bg-no-repeat relative">
            <Topbar />
            {/** Main text */}
            <div className="w-full h-max px-7 py-5 relative z-40">
                <h1 className="text-4xl text-gray-200 font-bold text-center tracking-wide">Hi, I am <strong className="text-primary">Ivan</strong></h1>
                <p className="py-2 text-center text-xs text-gray-200">A self-taught front end developer who love's to code and create personal projects</p>
                <div className="mt-3 flex justify-center">
                    <button className="px-2 py-1.5 text-sm text-gray-200 font-semibold bg-primary outline-none antialiased tracking-wide rounded-sm">
                        Featured projects
                    </button>
                </div>
            </div>
            {/** Button swipe */}
            <div className="absolute bottom-5 z-40">
                <button className="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {/** Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black opacity-80"></div>
        </div>
    );
}

export default Home;