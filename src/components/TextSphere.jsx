import { useEffect } from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";


const TextSphere = () => {
    const width = window.innerWidth > 1700 ? 350 
                : window.innerWidth > 1450 ? 300 
                : window.innerWidth > 1350 ? 250 
                : window.innerWidth > 1250 ? 210 
                : window.innerWidth > 600 ? 190 : 145

    // useEffect(() => {
    //     return () => {
    //         const container = '.tagcloud';
    //         const texts = ['JavaScript', 'HTML', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React', 'Node.js',
    //                        'Express.js', 'MongoDB', 'JSON', 'Github', 'Sourcetree', 'Bitbucket', 'Jira', 'Confluence', 'npm'];

    //         const options = {
    //             radius: width,
    //             maxSpeed: 'normal',
    //             initSpeed: 'normal',
    //             keep: true
    //         };

    //         TagCloud(container, texts, options);
    //     }
    // }, [width]);
    
    return (
        <div>
            <TagCloud
                    options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                    })}
                >
                    {[
                        "VSCode",
                        "TypeScript",
                        "React",
                        "Preact",
                        "Parcel",
                        "Jest",
                        "Next",
                        "ESLint",
                        "Framer Motion",
                        "Three.js",
                    ]}
                </TagCloud>
        </div>
        
    );
}
 
export default TextSphere;
