import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h4 style = {{backgroundColor:'#d9b3ff',padding : '10px',color:'#5900b3',borderRadius:'10px',boxShadow : "10px 10px 10px gray"}}>Friends Information</h4>
        <Sakib name = "Tanbir Sakib" email = 'iamtsakib@gmail.com'></Sakib>
        <Sakib name = "Emon Younes" email = 'emonyounes@gmail.com'></Sakib>
        <Sakib name = "Hassan Tohin" email = 'ghtohine@gmail.com'></Sakib>
        <Sakib name = "Joybal Vaiyye" email = 'borovaiyye@gmail.com'></Sakib>
        
      </header>
    </div>
  );
}
function Sakib(props){
  var sakibStyle = {
    backgroundColor : "#d9b3ff",
    margin : "10px",
    padding : '5px',
    color : "#5900b3",
    borderRadius : "20px",
    boxShadow : "10px 10px 10px gray"
  }
  return <div style = {sakibStyle}>
          <h5>Name : {props.name}</h5>
          <h5>Email: {props.email} </h5>
          <h5>University : International Islamic University Chittagong</h5>
         </div>   
}

export default App;
