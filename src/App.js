import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var makeup = {
    backgroundColor :'gray',
    color : 'cyan'
  }
  var sakib = {name:"Muhammed Tanbir Hossen Sakib",
               dream:"A passionate webdeveloper",
               Dept:"CSE"
}
  var youmon = {name:"Emon Younes",
  dream:"Databse developer",
  Dept:"CSE"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h5 style={makeup}>My info : {sakib.name + " " +"Dream:" + sakib.dream}</h5>
        <h5 style = {makeup}>info : {youmon.name + " " + youmon.Dept}</h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React with react
        </a>
      </header>
    </div>
  );
}

export default App;
