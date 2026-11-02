import React,{useState,useRef} from 'react'
import ReactPlayer from 'react-player'
import screenFull from 'screenfull'
import './App.css'

const App = () => {


  const[isPlaying,setIsPlaying] = useState(false)
  const[isMuted,setIsMuted] = useState(false)
  const[volume,setVolume] = useState(0.4)
  const[duration,setDuration] = useState(0)
  const[currentTime,setCurrentTime] = useState(0)
  const[played,setPlayed] = useState(0)
  const playerWrapperRef = useRef(null)

  function handlePlayPause(){
    setIsPlaying(!isPlaying)
  }

  function handleMuteUnMute(){
    setIsMuted(!isMuted)
  }

  function handleVolumeChange(e){
    setVolume(e.target.value)
  }

  function handleDurationChange(e){
    setDuration(e.target.duration)
  }

  function handleTimeUpdate(e){
    const currentTime = e.target.currentTime
    const totalTime = e.target.duration
    setCurrentTime(currentTime)
    setPlayed(currentTime/totalTime)
  }

  function formatTime(seconds){
    if (!seconds) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  function handleFullscreen(){
    if(screenFull.isEnabled){
      const element = playerWrapperRef.current
      if(element){
        element.style.height = `100vh`
        screenFull.request(element)
      }
    }
  }




  return (
    <div className='App' ref={playerWrapperRef} >
        <ReactPlayer
        src='https://www.youtube.com/watch?v=kWkMjYPbLeE'
        height='400px'
        width='100%'
        playing={isPlaying}
        muted={isMuted}
        volume={volume}
        onDurationChange={handleDurationChange}
        onTimeUpdate={handleTimeUpdate}
        />
        <div className='player-bar'>
          <span>{formatTime(currentTime)}</span>
          <input type='range' max={1} min={0} step={0.01} value={played} onChange={(e)=>setPlayed(Number(e.target.value))}/>
          <span>{formatTime(duration)}</span>
        </div>
        <div className='controls'>
          <div className='controls-left'>
            <button onClick={handleMuteUnMute}>{isMuted ? "unMute" : "Mute"}</button>
            <input max={1} min={0} step={0.1} value={volume} onChange={handleVolumeChange} className='volume' type='range'/>
          </div>
          <div className='controls-center'>
            <button onClick={handlePlayPause}>{(isPlaying)?("Pause"):("Play")}</button>
          </div>
          <div className='controls-right'>
            <button onClick={handleFullscreen}>Fullscreen</button>
          </div>
        </div>
    </div>
  )
}

export default App