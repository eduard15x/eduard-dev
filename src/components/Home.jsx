import { HiArrowNarrowRight } from 'react-icons/hi';
// import ProfilePic from '../assets/Profile.png';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-slate-900">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                {/* Intro title */}
                <h1 className="flex flex-col">
                    <span className="text-pink-600 text-2xl sm:text-3xl">
                        Hi there,
                    </span>
                    <span className="text-yellow-600 text-4xl sm:text-7xl font-bold">
                        I'm Eduard Precup.
                    </span>
                </h1>
                {/* Short intro description */}
                <p className="text-#8892b0 sm:text-1xl py-4 max-w-[700px]">
                    I am a frontend developer and currently I focus on building responsive
                    full-stack web applications. Lorem ispsum ohole danej sle n adkd dosoo
                    dadajb  iag iuuo q 9 9 q q989fq hj 0q0f  qfqhf90q qfh9 h0h9qh q 090q9.
                </p>
                {/* Button navigate to next section */}
                <div>
                    <button className='text-white group border-2 px-5 py-3 my-2 flex items-center hover:bg-pink-600'>
                        <span>Skills</span>
                        <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
                    </button>
                </div>
                {/* Homepage Image */}
                {/* <img className='hidden lg:block absolute w-[350px] right-[5%] rounded-full'
                    src={ ProfilePic } alt="Profile"
                /> */}
            </div>
        </div>
    );
}
 
export default Home;
