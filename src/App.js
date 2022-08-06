import {useState, useEffect} from 'react';
import './index.css'


function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [timerReset, setTimerReset] = useState(false);

  const incrementBreak = () => {
    !timerOn && breakLength < 60 && setBreakLength(breakLength + 1);
    // if (breakLength < 60) {
    //   setBreakLength(breakLength + 1);
    // }
  }

  const decrementBreak = () => {
    !timerOn && breakLength > 1 && setBreakLength(breakLength - 1);
    // if (breakLength > 1) {
    //   setBreakLength(breakLength - 1);
    // }
  }
  
  const incrementSession = () => {
  
  // eslint-disable-next-line no-unused-expressions
  !timerOn ? (
    sessionLength < 60 ? (
    setSessionLength(sessionLength + 1), 
    setTimeLeft(timeLeft + 1)) : null
    ): console.log("Aqui 2");
    // if (sessionLength < 60) {
    //   setSessionLength(sessionLength + 1);
    //   setTimeLeft(sessionLength + 1);
    // }
  }

  const decrementSession = () => {
    // eslint-disable-next-line no-unused-expressions
    !timerOn ? (
      sessionLength > 1 ? (
      setSessionLength(sessionLength - 1), 
      setTimeLeft(timeLeft - 1)) : null
      ): console.log("Aqui 3");

    // if (sessionLength > 1) {
    //   setSessionLength(sessionLength - 1);
    //   setTimeLeft(timeLeft - 1);
    // }
  }

  const playStop = () => {
    myTimer ()
    setTimerOn(!timerOn);
  }

  const handleMyReset = () => {
    setTimeLeft(25);
    setTimerOn(false);
    setBreakLength(5);
    setSessionLength(25);
    clearTimeout(myTimer);
    setTimerReset(!timerReset);
    // setTimeLeft(25);
    // setTimeLeft(25);
  }

  const  myTimer = () => {  
    setTimeout(() => {
      setTimeLeft(timeLeft + 1)
    }, 1000);
  }

  useEffect(() => {
    if (timerOn===true && timerReset === false) {
      myTimer()
    }
    else if (timerOn===false && timerReset === true) {
      setTimeLeft(25);
    }

    // else {
    //   // clearTimeout(myTimer);
    //   setTimeLeft(25);
    // }

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
              <div id="break-length">{breakLength}</div> {/* aqui va 5 */}
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
              <div id="session-length">{sessionLength} </div> {/* aqui va 5 */}
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
            <div id="time-left">{timeLeft}:xx </div> {/* aqui va 25 */}
            <div 
              className="timeronoff" 
              style={timerOn? {background:"red",borderColor:"red"}: {background:"none"}} >{timerOn ? "on": "off"} </div>
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
