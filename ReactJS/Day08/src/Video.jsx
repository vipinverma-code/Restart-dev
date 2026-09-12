import { useRef } from "react";
function Video(){
    const videoRef= useRef(null)
    function handleStart(){
        videoRef.current.play();
    }
    function handleStop(){
        videoRef.current.pause();

    }
    function handleRestart(){
        videoRef.current.currentTime=0;
    }
    return(
        <>
        <video ref={videoRef} src="/public/zidd.mp4" width="600" height="400" ></video>
        <div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>pause</button>
            <button onClick={handleRestart}>Restart</button>
        </div>
        </>
    )
}
export default Video;