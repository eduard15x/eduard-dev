import { HiArrowNarrowRight } from 'react-icons/hi';
// import ProfilePic from '../assets/Profile.png';
import { Link } from 'react-scroll';
import TextSphere from './TextSphere';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#090909]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto xl:ml-[50px] 2xl:ml-[100px] 3xl:ml-[175px] pb-[280px] xl:pb-0 px-8 flex flex-col justify-center h-full">
                {/* Intro title */}
                <h1 className="flex flex-col">
                    <span className="text-[#50bdb7] text-2xl sm:text-3xl font-bold">
                        Hi there,
                    </span>
                    <span className="text-[#66FCF1] text-4xl sm:text-7xl font-bold">
                        I'm Eduard Precup.
                    </span>
                </h1>
                {/* Short intro description */}
                <p className="text-[#9c9d9e] text-lg py-3 sm:py-4 md:py-5 max-w-[700px]">
                    I am a frontend developer and currently I focus on building responsive
                    full-stack web applications.
                </p>
                {/* Button navigate to next section */}
                <Link to="about" smooth={true} duration={500}>
                    <button className='relative z-[3] text-white group border-2 border-[#50bdb7] px-5 py-3 my-2 flex items-center bg-[#2c3541] hover:bg-[#50bdb7]'>
                        <span>About</span>
                        <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
                    </button>
                </Link>
                {/* 3D TextSphere */}
                <TextSphere />
            </div>
        </div>
    );
}
 
export default Home;
