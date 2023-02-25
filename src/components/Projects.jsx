// import Profile from '../assets/Profile.png';

const Projects = () => {
    return (
        <div name="projects" className="w-full md:h-screen text-gray-300 bg-green-900">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray border-pink-600">Work</p>
                    <p className="py-6">Check out some of my recent work1</p>
                </div>
                
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
                    {/* Grid item */}
                    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}
                    className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                ReactJS APPLICATION
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://localhost:3000/" className="mx-4">
                                    <button className="text-center rounded-lg w-[75px] p-3 bg-white text-gray-700 font-bold text-lg hover:opacity-75 duration-300">
                                        Demo
                                    </button>
                                </a>
                                <a href="http://localhost:3000/" className="mx-4">
                                    <button className="text-center rounded-lg w-[75px] p-3 bg-white text-gray-700 font-bold text-lg hover:opacity-75 duration-300">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid item */}
                    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}
                    className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                ReactJS APPLICATION
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://localhost:3000/" className="mx-4">
                                    <button className="text-center rounded-lg w-[75px] p-3 bg-white text-gray-700 font-bold text-lg hover:opacity-75 duration-300">
                                        Demo
                                    </button>
                                </a>
                                <a href="http://localhost:3000/" className="mx-4">
                                    <button className="text-center rounded-lg w-[75px] p-3 bg-white text-gray-700 font-bold text-lg hover:opacity-75 duration-300">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}
 
export default Projects;
