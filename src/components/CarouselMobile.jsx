import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import MoviesSlider from '../assets/small-screens/sm-movieSlider-project.png';
import Ecommerce1 from '../assets/small-screens/sm-ecommerce1-project.png';
import Booking from '../assets/small-screens/sm-booking-project.png';
import quoteGenerator from '../assets/small-screens/sm-quoteGenerator-project.png';
import ToDoList from '../assets/small-screens/sm-toDoList-project.png';
import Portofolio from '../assets/small-screens/sm-portofolio-project.png';

const CarouselMobile = () => {
    const slides = [
        {projectName: "Booking App", image: Booking, demo: "", code: "https://github.com/eduard15x/school-application-ulbs"},
        {projectName: "To Do List", image: ToDoList, demo: "", code: "https://github.com/eduard15x/react-simple-to-do-list"},
        {projectName: "Movies Slider", image: MoviesSlider, demo: "", code: "https://github.com/eduard15x/Slider-Movies-Spoilers"},
        {projectName: "eCommerce Page", image: Ecommerce1, demo: "", code: "https://github.com/eduard15x/OSF-Academy-eCommerce-Frontend-Project"},
        {projectName: "Quote Generator", image: quoteGenerator, demo: "", code: "https://github.com/eduard15x/quote-generator-app"},
        {projectName: "Personal Portofolio", image: Portofolio, demo: "", code: "https://github.com/eduard15x/eduard-dev"},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='block sm:hidden h-full w-full relative'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                className='shadow-lg shadow-[#171616] max-w-[280px] max-h-[auto] w-[85%] h-[85%] rounded-md 
                            bg-center bg-cover duration-500 mx-auto flex justify-between items-center'
            >
                {/* Left Arrow */}
                <div className='relative left-0 w-[20%] h-[75%] text-2xl rounded-full p-2  text-white cursor-pointer flex items-center justify-center'>
                    <BsChevronCompactLeft onClick={prevSlide} className='h-full' size={40}/>
                </div>
                {/* Right Arrow */}
                <div className='relative right-0 w-[20%] h-[75%] text-2xl rounded-full p-2  text-white cursor-pointer flex items-center justify-center'>
                    <BsChevronCompactRight onClick={nextSlide} className='h-full' size={40} />
                </div>
                {/* Content/projects details on hover */}
                <div className="absolute bg-black max-w-[280px] w-[85%] bottom-[90px] flex flex-col items-center justify-end">
                    <span className="text-lg font-bold text-white pt-1">
                        { slides[currentIndex].projectName }
                    </span>
                    <div className="pt-2 pb-1 text-center">
                        <a href={ slides[currentIndex].code } className="mx-4" target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg w-[100px] p-2 bg-white text-[#090909] font-bold text-md hover:opacity-75 duration-300">
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={(e) => goToSlide(slideIndex)}
                        className={`slides-borders text-2xl cursor-pointer`}
                    >
                    <RxDotFilled />
                </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselMobile;
