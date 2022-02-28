import sliderData from './slider/sliderData';
import RightButton from './slider/RightButton';
import LeftButton from './slider/LeftButton';
import { useState } from 'react';

const Projects = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div role="region" className="w-full h-max mt-20 py-2 bg-white md:mt-28 flex flex-col items-center xl:mt-44">
            <div className="w-full h-7 flex justify-start items-end xs:h-8">
                <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                <h1 className="text-lg text-secondary font-semibold uppercase antialiased tracking-wide xs:text-xl md:text-2xl">featured projects</h1>
            </div>
            <div className="w-full h-max relative px-2 mt-7 md:mt-10 max-w-7xl">
                {sliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'opacity-100 transition duration-700 ease-in' : 'opacity-0'} key={index}>
                            {index === current && (
                            <div className="flex flex-col justify-center items-center">
                                <img src={slide.image} className="h-44 object-cover rounded-md xs:h-48 md:w-full md:h-96 xl:max-w-3xl" alt="Project images"/>
                                <div className="flex flex-col items-center mt-3 md:mt-10">
                                    <h1 className='text-gray-900 font-semibold xs:text-lg md:text-2xl'>{slide.title}</h1>
                                    <a href={slide.link} className="mt-2 text-xs underline xs:text-sm md:text-lg">{slide.link}</a>
                                </div>
                            </div>
                            )}
                        </div>
                    );
                })}
                <LeftButton onClick={prevSlide} />
                <RightButton onClick={nextSlide} />
            </div>
        </div>  
    );
}
 
export default Projects;