import {useState, useEffect} from 'react';
import './index.css'


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25);

  const incrementBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    // setBreakLength(breakLength + 1);
  }
  const decrementBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
    // setBreakLength(breakLength - 1);
  }
  
  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(sessionLength + 1);
    }
    // setSessionLength(sessionLength + 1);
    // setTimeLeft(timeLeft + 1);
  }

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 1);
    }
    // setSessionLength(sessionLength - 1);
    // setTimeLeft(timeLeft - 1);
  }

  const playStop = () => {
    myTimer ()
  }

  const handleMyReset = () => {
    clearTimeout(myTimer);
    setBreakLength(0);
    setSessionLength(0);
    setTimeLeft(0);
  }

  const  myTimer = () => {  
    setTimeout(() => {
      setTimeLeft(timeLeft + 1)
    }, 2000);
  }

  useEffect(() => {
    // if (timeLeft === 0) {
    //   clearTimeout(myTimer);
    // } else {
    //   myTimer()    
    // }
    // myTimer()    
  }, [timeLeft]);

  return (
    <div className="App">
      <div className="caja">
        <div className="main-title">
          <header className="App-header">
            <p><code>25 + 5 Clock</code> </p>
          </header>
          </div>
        <div className="control-superior">
          <div className="control-superior-caja"> 
            <div id="break-label">Break Lenght</div>
            <div className="subcontroles">
              <button 
                className="botones" 
                id="break-increment"
                onClick={() =>incrementBreak()}>🔼</button>
              <div id="break-length">(5) {breakLength}</div>
              <button 
                className="botones" 
                id="break-decrement"
                onClick={()=> decrementBreak()}>🔽</button>
            </div>
          </div>
          <div className="control-superior-caja"> 
            <div id="session-label">Session Lenght</div>
            <div className="subcontroles">
              <button 
                className="botones" 
                id="session-increment"
                onClick={()=> incrementSession()}>🔼</button>
              <div id="session-length">(25) {sessionLength} </div>
              <button 
                className="botones" 
                id="session-decrement"
                onClick={()=> decrementSession()}>🔽</button>
            </div>
          </div>
        </div>
        <div className="control-medio">
          <div className="control-medio-wrapper">
            <div id="timer-label">Session</div>
            <div id="time-left">(25:00) {timeLeft}</div>
          </div>
        </div>
        <div className="control-inferior">
          <button 
            id="start_stop"
            onClick={()=> playStop()}>▶️⏸️</button>
          <button 
            id="reset"
            onClick={()=>handleMyReset()}>🔁</button>
        </div>
        <footer> Design and coded by Humberto Asca @2022 </footer>
      </div>
    </div>
  );
}

export default App;
