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

    function forward10(){
        videoRef.current.currentTime+=10;
    }
    function backward10(){
        videoRef.current.currentTime-=10;
    }
    return(
        <>
        <video ref={videoRef} src="/zidd.mp4" width="600" height="400" ></video>
        <div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>pause</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={forward10}>+10</button>
            <button onClick={backward10}>-10</button>
        </div>
        </>
    )
}
export default Video;