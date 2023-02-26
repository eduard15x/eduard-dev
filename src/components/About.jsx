import Profile from '../assets/Profile.png';

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#060606] text-gray-400">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[100px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 sm:pb-12 xl:pb-24">
                        <p className="text-2xl sm:text-5xl font-bold inline border-b-4 border-[#66FCF1] pb-1">
                            About
                        </p>
                    </div>
                </div>
                
                <div className="relative max-w-[1050px] xl:max-w-[1120px] 2xl:max-w-[1280px] w-full grid sm:grid-cols-2 xl:grid-cols-12 gap-8 px-4
                    pb-56 sm:pb-32 xl:pb-10 xl:px-0">
                    <div className="sm:text-right text-xl sm:text-4xl font-bold xl:col-span-5 xl:pr-[10px]">
                        <p>Good day!</p>
                        <p>I'm <span className='text-[#66FCF1]'>Eduard</span>, nice to meet you!</p>
                    </div>
                    <div className='absolute xl:relative bottom-0 w-full 
                        sm:bottom-[130px] md:bottom-[60px] lg:bottom-[20px] xl:col-span-2'>
                        <img src={Profile} alt="Img with me" className='w-[150px] mx-auto rounded-[50%]
                        sm:w-[175px] sm:mx-[0px] sm:ml-[100px]
                        md:w-[185px] md:ml-[150px]
                        lg:w-[200px] lg:ml-[175px]
                        xl:mx-auto xl:ml-[auto]' />
                    </div>
                    <div className='xl:col-span-5 xl:pl-[10px]'>
                        <p className="text-lg text-gray-400">
                            I have just over a year of experience as a junior frontend developer which included
                            responsabilities like performing UX optimization, maintaining user interface and
                            fixing bugs. I'm a sociable and a dynamic person, very motivated and I love working
                            with a team. <br />
                            I like to keep up with the new features of web development and I'm continuously 
                            aiming to improve my skills which include the new technologies. <br />
                            My goals are to create web and mobile applications and to become a full-stack
                            developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
