import { useEffect } from "react";
import TagCloud from "TagCloud";

const TextSphere = () => {
    useEffect(() => {
        return () => {
            const container = '.tagcloud';
            const texts = ['JavaScript', 'HTML', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React', 'Node.js',
                           'Express.js', 'MongoDB', 'JSON', 'Github', 'Sourcetree', 'Bitbucket', 'Jira', 'Confluence', 'npm'];

            const options = {
                radius: 300,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true
            };

            TagCloud(container, texts, options);
        }
        // eslint-disable-next-line 
    }, []);
    
    return (
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[2]
                        pt-[400px] md:pt-[320px]
                        xl:left-auto xl:translate-x-0 xl:pt-0 xl:right-[50px] 3xl:right-[110px]">
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </div>
    );
}
 
export default TextSphere;
