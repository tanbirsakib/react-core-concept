import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : 'Iphone11', price : 'BDT 110000'},
    {name : 'RealmeX2', price : 'BDT 25000'},
    {name : 'Redmi Note8', price : 'BDT 20000'},
    {name : 'Samsung A50', price : 'BDT 27000'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">
        <h4 style = {{backgroundColor:'#d9b3ff',padding : '10px',color:'#5900b3',borderRadius:'10px',boxShadow : "10px 10px 10px gray"}}>Friends Information</h4>
        <Products product = {products[0]}></Products>
        <Products product = {products[1]}></Products>
        <Products product = {products[2]}></Products>
        <Products product = {products[3]}></Products>
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
function Products(props){
  const productStyle = {
    backgroundColor : '#ff66b3',
    height : '200px',
    width : '300px',
    borderRadius : '10px',
    margin : '10px'

  }
 const {name, price} = props.product;
  return (
    <div style = {productStyle}>
    <h4>Name : {name}</h4>
    <h4>{price}</h4>
    <button>Buy Now</button>
    </div>
  )
}

export default App;
