import Image from "../images/my_image.jpg"

const About = () => {
    return (  
        <div role="region" className="w-full h-max relative bg-white md:mt-10">
            <div className="w-full h-max flex flex-col items-center">
                <img src={Image} alt="" className="h-28 object-contain rounded-full xs:h-32 md:h-36" />
                <div className="mt-10">
                    <div className="w-full h-7 flex justify-start items-end xs:h-8 md:h-9">
                        <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                        <h1 className="text-lg text-secondary font-semibold uppercase antialiased tracking-wide xs:text-xl md:text-2xl">about</h1>
                    </div>
                    <p className="px-2 mt-7 text-xs text-justify text-secondary antialiased xs:text-sm md:text-base">
                        Hi, my name is Ivan Ditchon. As of now, I am still keep practing just to develop and enhance my skills on front end development and UX/UI design.
                        I've created some projects so that, I could apply all the knowledge that I have and could land a job as a front end developer. In my downtime, I enjoying reading
                        manga and about web API's.
                    </p>
                </div>
            </div>
            {/** Skills & experience  container*/}
            <div className="w-full h-max mt-16 md:mt-20">
                {/** Skills section */}
                <div className="w-full h-max">
                    <div className="w-full h-7 flex justify-start items-end xs:h-8 md:h-9">
                        <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                        <h1 className="text-base text-secondary font-medium uppercase antialiased tracking-wide xs:text-lg md:text-xl">skills</h1>
                    </div>
                    <div className="mt-7 px-2">
                        {/** HTML */}
                        <div className="flex flex-col w-full h-full">
                            <div className="flex justify-between">
                                <h1 className="text-sm text-secondary font-primary tracking-wide uppercase antialiased xs:text-base md:text-lg">html</h1>
                                <h2 className="text-sm text-secondary font-primary ml-2 xl:text-base antialiased xs:text-base md:text-lg">90%</h2>
                            </div>
                            <div className="w-full h-3 border bg-gray-200 rounded-full xs:h-4 md:h-5">
                                <div className="w-0 h-full bg-primary flex items-center rounded-full animate-skills-graph-html"></div>
                            </div>
                        </div>
                        {/** CSS */}
                        <div className="flex flex-col h-max mt-3">
                            <div className="flex justify-between">
                                <h1 className="text-sm text-secondary font-primary tracking-wide uppercase antialiased xs:text-base md:text-lg">css</h1>
                                <h2 className="text-sm text-secondary font-primary ml-2 xl:text-base antialiased xs:text-base md:text-lg">80%</h2>
                            </div>
                            <div className="w-full h-3 border bg-gray-200 rounded-full xs:h-4 md:h-5">
                                <div className="w-0 h-full bg-primary flex items-center rounded-full animate-skills-graph-css"></div>
                            </div>
                        </div>
                        {/** JavaScript */}
                        <div className="flex flex-col w-full h-max mt-3">
                            <div className="flex justify-between">
                                <h1 className="text-sm text-secondary font-primary tracking-wide antialiased xs:text-base md:text-lg">JavaScript</h1>
                                <h2 className="text-sm text-secondary font-primary ml-2 xl:text-base antialiased xs:text-base md:text-lg">60%</h2>
                            </div>
                            <div className="w-full h-3 border bg-gray-200 rounded-full xs:h-4 md:h-5">
                                <div className="w-0 h-full bg-primary flex items-center rounded-full animate-skills-graph-javascript"></div>
                            </div>
                        </div>
                        {/** React */}
                        <div className="flex flex-col w-full h-max mt-3">
                            <div className="flex justify-between">
                                <h1 className="text-sm text-secondary font-primary tracking-wide antialiased xs:text-base md:text-lg">React JS</h1>
                                <h2 className="text-sm text-secondary font-primary ml-2 xl:text-base antialiased xs:text-base md:text-lg">20%</h2>
                            </div>
                            <div className="w-full h-3 border bg-gray-200 rounded-full xs:h-4">
                                <div className="w-0 h-full bg-primary flex items-center rounded-full transition animate-skills-graph-react"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/** Experience section */}
                <div className="w-full h-max mt-16 md:mt-20">
                    <div className="w-full h-7 flex justify-start items-end xs:h-8 md:h-9">
                        <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                        <h1 className="text-base text-secondary font-medium uppercase antialiased tracking-wide xs:text-lg md:text-xl">experience</h1>
                    </div>
                    <div className="flex justify-center items-center mx-2 mt-7 relative md:mt-10">
                        <div className="w-0.5 h-96 bg-gray-200"></div>
                        <div className="w-1/2 h-max absolute top-0 left-0 px-2 py-2 shadow-lg">
                            <h2 className="text-secondary antialiased md:text-lg">IT Staff</h2>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap capitalize antialiased xs:text-sm md:text-base">precious cabana ynna beach resort</p>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap antialiased xs:text-sm md:text-base"><i>Dec. 12, 2018 - Dec 31, 2021</i></p>
                            {/** Mark */}
                            <span className="flex h-3 w-3 absolute -right-1.5 -top-2 xs:h-4 xs:w-4 xs:-right-2 md:h-5 md:w-5 md:-right-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary xs:h-4 xs:w-4 md:h-5 md:w-5"></span>
                            </span>
                        </div>
                        <div className="w-1/2 h-max absolute top-1/2 transform -translate-y-1/2 right-0 px-2 py-2 shadow-lg">
                            <h2 className="text-secondary capitalize antialiased">sales officer</h2>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap capitalize antialiased xs:text-sm md:text-base">precious cabana ynna beach resort</p>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap antialiased xs:text-sm md:text-base"><i>Jan. 12, 2020 - Dec 31, 2021</i></p>
                            {/** Mark */}
                            <span className="flex h-3 w-3 absolute -top-2 -left-1.5 xs:h-4 xs:w-4 xs:-left-2 md:h-5 md:w-5 md:-left-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary xs:h-4 xs:w-4 md:h-5 md:w-5"></span>
                            </span>
                        </div>
                        <div className="w-1/2 h-max absolute bottom-0 left-0 px-2 py-2 shadow-lg">
                            <h2 className="text-secondary capitalize antialiased md:text-lg">payroll clerk</h2>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap capitalize antialiased xs:text-sm md:text-base">precious cabana ynna beach resort</p>
                            <p className="py-0.5 text-secondary text-xs overflow-auto whitespace-nowrap antialiased xs:text-sm md:text-base"><i>Jan. 12, 2020 - Dec 31, 2021</i></p>
                            {/** Mark */}
                            <span className="flex h-3 w-3 absolute -right-1.5 -top-2 xs:h-4 xs:w-4 xs:-right-2 md:h-5 md:w-5 md:-right-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary xs:h-4 xs:w-4 md:h-5 md:w-5"></span>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;