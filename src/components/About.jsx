const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#060606] text-gray-400">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[100px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-10">
                        <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1] pb-1">
                            About
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bols">
                        <p>Good day! I'm Eduard, nice to meet you!</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">
                            I have just over a year of experience as a junior frontend developer which included
                            responsabilities like performing UX optimization, maintaining user interface and
                            fixing bugs. I'm a sociable and a dynamic person, very motivated and I love working
                            with a team.
                            I also study and look for new things to improve my skills day by day.
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
