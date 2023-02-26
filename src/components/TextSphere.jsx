import { useEffect } from "react";
import TagCloud from "TagCloud";

const TextSphere = () => {
    const width = window.innerWidth > 1700 ? 350 
                : window.innerWidth > 1450 ? 300 
                : window.innerWidth > 1350 ? 250 
                : window.innerWidth > 1250 ? 210 
                : window.innerWidth > 600 ? 190 : 145

    useEffect(() => {
        return () => {
            const container = '.tagcloud';
            const texts = ['JavaScript', 'HTML', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React', 'Node.js',
                           'Express.js', 'MongoDB', 'JSON', 'Github', 'Sourcetree', 'Bitbucket', 'Jira', 'Confluence', 'npm'];

            const options = {
                radius: width,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true
            };

            TagCloud(container, texts, options);
        }
    }, [width]);
    
    return (
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[2]
                        pt-[400px] md:pt-[320px]
                        xl:left-auto xl:translate-x-0 xl:pt-0 xl:right-[50px] 3xl:right-[110px]">
            <div className="text-sphere">
                <span className="tagcloud"><span className="opacity-0">.</span></span>
            </div>
        </div>
    );
}
 
export default TextSphere;
