import React, {useState} from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [isReset, setIsReset] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  }
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  }
  const resetTimer = () => {
    setIsReset(true);
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalId);
  }
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const handleStart = () => {
    startTimer();
    setIsReset(false);
  }
  const handleStop = () => {
    stopTimer();
  }
  const handleReset = () => {
    resetTimer();
  }
  

  return (
    <div className="App">

       <h1>Stopwatch</h1>
        <div className="stopwatch">
          <div className="time">{formatTime(time)}</div>
          <div className="controls">
            { isRunning ? (<button onClick={handleStop} >Stop</button>): <button onClick={handleStart}>Start</button>}
            
            
            <button onClick={handleReset} disabled={isReset}>Reset</button>
          </div>
        </div>

    </div>
  );
}

export default App;
