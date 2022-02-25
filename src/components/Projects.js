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
        <div role="region" className="w-full h-max mt-20 py-2 bg-white">
            <div className="w-full h-7 flex justify-start items-end">
                <div className="w-1 h-full mr-1 bg-primary rounded-full"></div>
                <h1 className="text-lg text-secondary font-semibold uppercase antialiased tracking-wide">featured projects</h1>
            </div>
            <div className="w-full h-max relative mt-7">
                {sliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'opacity-100 transition duration-700 ease-in' : 'opacity-0'} key={index}>
                            {index === current && (<div>
                                <img src={slide.image} className="h-44 object-cover rounded-md" alt="Project images"/>
                                <div className="flex flex-col items-center mt-3">
                                    <h1 className='text-gray-900 font-semibold'>{slide.title}</h1>
                                    <a href={slide.link} className="mt-2 text-xs underline">{slide.link}</a>
                                </div>
                            </div>)}
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