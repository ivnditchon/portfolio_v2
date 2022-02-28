import socialMedia from "../images/social_media/social_media";

const Contact = () => {
    // JSX templates
    return (  
        <div role="region" className="w-full h-max mt-20 relative bg-white md:mt-28 xl:mt-44">
            <div className="w-full h-7 flex justify-start items-end xs:h-8">
                <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                <h1 className="text-lg text-secondary font-semibold uppercase antialiased tracking-wide xs:text-xl md:text-2xl">contact</h1>
            </div>
            <div className="mt-7 xl:flex xl:justify-between">
                <div className="w-full h-max px-2 max-w-3xl">
                    {/** Email container */}
                    <div className="flex items-center">
                        <div className="mr-3">
                            {/** Email icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary xs:w-7 xs:h-7 md:w-8 md:h-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <p className="text-sm xs:text-base md:text-lg">ivnditchon@gmail.com</p>
                    </div>
                    {/** Address container */}
                    <div className="flex items-start my-3">
                        <div className="mr-3">
                            {/** Address icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary xs:w-7 xs:h-7 md:w-8 md:h-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-sm xs:text-base md:text-lg">#001, Rosary Height 2, Notre Dame University Compound, Cotabato City, 9600, Philippines</p>
                    </div>
                    {/** Phone container */}
                    <div className="flex items-center">
                        <div className="mr-3">
                            {/** Phone icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary xs:h-7 xs:w-7 md:h-8 md:w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <p className="text-sm xs:text-base md:text-lg">+63 906 7387 075</p>
                    </div>
                </div>
                {/** Social media */}
                <div className="w-full h-max mt-16 md:mt-20 xl:mt-0">
                    <div className="w-full h-7 flex justify-start items-end xs:h-8 md:h-9">
                        <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                        <h1 className="text-base text-secondary font-medium uppercase antialiased tracking-wide xs:text-lg md:text-xl">social media</h1>
                    </div>
                    <div className="flex items-center mt-7 px-2">
                        {socialMedia.map((icons) => {
                                return (
                                    <a href={icons.link} className="mr-3 xs:mr-4" key={icons.id}>
                                        <img src={icons.src} alt={icons.alt} className="h-6 object-contain xs:h-7 md:h-8"/>
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;