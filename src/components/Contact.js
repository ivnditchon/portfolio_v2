import socialMedia from "../images/social_media/social_media";

const Contact = () => {
    // JSX templates
    return (  
        <div role="region" className="w-full h-max mt-20 relative bg-white">
            <div className="w-full h-7 flex justify-start items-end">
                <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                <h1 className="text-lg text-secondary font-semibold uppercase antialiased tracking-wide">contact</h1>
            </div>
            <div className="w-full h-max mt-7 px-2">
                {/** Email container */}
                <div className="flex items-center">
                    <div className="mr-3">
                        {/** Email icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                    <p className="text-sm">ivnditchon@gmail.com</p>
                </div>
                {/** Address container */}
                <div className="flex items-start my-3">
                    <div className="mr-3">
                        {/** Address icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm">#001, Rosary Height 2, Notre Dame University Compound, Cotabato City, 9600, Philippines</p>
                </div>
                {/** Phone container */}
                <div className="flex items-center">
                    <div className="mr-3">
                        {/** Phone icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <p className="text-sm">+63 906 7387 075</p>
                </div>
            </div>
            {/** Social media */}
            <div className="w-full h-max mt-16">
                <div className="w-full h-7 flex justify-start items-end">
                    <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                    <h1 className="text-base text-secondary font-medium capitalize antialiased tracking-wide">social media</h1>
                </div>
                <div className="flex items-center mt-7 px-2">
                    {/** Github */}
                    <a href={ socialMedia['links'].github } className="mr-3">
                        {/** Github icon */}
                        <img src={ socialMedia['icons'].github } alt="Github" className="h-6 object-contain"/>
                    </a>
                    {/** Linkedin */}
                    <a href={ socialMedia['links'].linkedin } className="mr-3">
                        {/** Linkedin icon */}
                        <img src={ socialMedia['icons'].linkedin } alt="LinkedIn" className="h-6 object-contain"/>
                    </a>
                    {/** Twitter */}
                    <a href={ socialMedia['links'].twitter } className="mr-3">
                        {/** Twitter icon */}
                        <img src={ socialMedia['icons'].twitter } alt="Twitter" className="h-6 object-contain"/>
                    </a>
                     {/** Facebook */}
                    <a href={ socialMedia['links'].facebook }>
                         {/** Facebook icon */}
                        <img src={ socialMedia['icons'].facebook } alt="Facebook" className="h-6 object-contain"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;