import {useState, useEffect} from "react";

export default function ImageSwitch({ frame1, frame2 }){
    const frames = [frame1, frame2];
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex(prev => (prev + 1) % frames.length);
        }, 900);
        return () => clearInterval(interval);
    }, []);

    return(
        <img src = {frames[frameIndex]}/>
    )

}
