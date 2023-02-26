import skillsData from '../data/skills.json';

const Skills = () => {
    
    return (
      <div name='skills' className='w-full h-screen bg-[#060606] text-gray-400'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
                {skillsData.map((el) => (
                    <div className='shadow-sm shadow-[#50bdb7]  hover:cursor-default hover:scale-125 duration-500 bg-[#060606] py-2 pt-4'>
                        <img className='w-4 md:w-16 mx-auto' src={el.icon} alt="HTML icon" />
                        <p className='my-2 hover:cursor-default'>{ el.skill }</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
