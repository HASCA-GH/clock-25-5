import './App.css';

function App() {
  return (
    <div className="App">
      <div className="caja">
        <div className="main-title">
          <header className="App-header">
            <p><code>25 + 5 clock</code> </p>
          </header>
          </div>
        <div className='control-superior'>
          <div className='control-superior-caja'> 
            <div id='break-label'>Break Lenght</div>
            <div className='subcontroles'>
              <div className='botones'>🔼</div>
              <div className='botones'>🔽</div>
            </div>
          </div>
          <div className='control-superior-caja'> 
            <div id='session-label'>Session Lenght</div>
            <div className='subcontroles'>
              <div className='botones'>🔼</div>
              <div className='botones'>🔽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
