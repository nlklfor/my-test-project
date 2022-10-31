
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className='header__title'>Job Details</h1>
          <li className='header__links'>
            <a className='header__links-save'>
                Save to my list
            </a>
            <a className='header__links-share'>
                Share
            </a>
          </li>
      </header>
      <div className='header__button'>
        <button className=''>APPLY NOW</button>
      </div>
    </div>
  );
}

export default App;
