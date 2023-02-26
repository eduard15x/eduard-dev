import MoviesSlider from '../assets/movieSlider-project.png';
import Ecommerce1 from '../assets/ecommerce1-project.png';
import Booking from '../assets/booking-project.png';
import JokeTeller from '../assets/jokeTeller-project.png';
import ToDoList from '../assets/toDoList-project.png';
import Portofolio from '../assets/portofolio-project.png';

const Projects = () => {
    const projects = [
        {projectName: "To Do List", image: ToDoList, demo: "", code: "https://github.com/eduard15x/react-simple-to-do-list"},
        {projectName: "Booking App", image: Booking, demo: "", code: "https://github.com/eduard15x/school-application-ulbs"},
        {projectName: "Movies Slider", image: MoviesSlider, demo: "", code: "https://github.com/eduard15x/Slider-Movies-Spoilers"},
        {projectName: "eCommerce Page", image: Ecommerce1, demo: "", code: "https://github.com/eduard15x/OSF-Academy-eCommerce-Frontend-Project"},
        {projectName: "Joke-Teller App", image: JokeTeller, demo: "", code: "https://github.com/eduard15x/40-projects-with-JS-created-by-code-along/tree/main/Joke%20teller"},
        {projectName: "Personal Portofolio", image: Portofolio, demo: "", code: "https://github.com/eduard15x/eduard-dev"},
    ];

    return (
        <div name="projects" className="w-full md:h-screen text-[#9c9d9e] bg-[#090909]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray border-[#66FCF1]">Projects</p>
                    <p className="py-6">Check out some of my recent projects below</p>
                </div>
                
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
                    {/* Grid item */}
                    {
                        projects.map((el) => (
                            <div style={{backgroundImage: `url(${el.image})`}}
                                className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
                                {/* Hover effects */}
                                <div className="opacity-0 group-hover:opacity-100 duration-300">
                                    <span className="text-2xl font-bold text-white tracking-wider">
                                        { el.projectName }
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href={ el.code } className="mx-4" target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg w-[100px] p-3 bg-white text-[#090909] font-bold text-lg hover:opacity-75 duration-300">
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>            
        </div>
    );
}
 
export default Projects;
