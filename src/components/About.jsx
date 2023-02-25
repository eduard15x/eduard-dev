const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-slate-800 text-gray-400">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[100px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bols">
                        <p>Good day! I'm Eduard, nice to meet you!</p>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies 
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
