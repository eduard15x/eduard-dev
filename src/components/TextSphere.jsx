import { useEffect } from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";


const TextSphere = () => {
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
