import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const heros = [{ name : 'calbonm', age: 58},
  //                   { name : 'lanbon', age: 12} , 
  //                   { name : 'makzji', age: 10}];
  const herosAge = ['30','40','80']
 const [heros , setHeros] = useState([])
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setHeros(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <MovieCount></MovieCount>
      <div>
      
        {
          heros.map(hr => <Hero name={hr.name} key={hr.id} age={hr.age}></Hero>)
        }
        
     
     {/* <Hero name="kelvin"></Hero>
      <Hero name={heros[1]} age="30"></Hero>
      <Hero name="Zelvin" age={herosAge[2]}></Hero>
      <Hero ></Hero> */}
   
      

      </div>
      </header>
    </div>
  );
}
function MovieCount(){
  const movieStyle = {
    border:'2px solid salmon',
    padding:'5px',
    margin:'10px',
  }
  const[count, setCount] = useState(5);
  console.log(count, setCount);
  const handle = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
  <div style={movieStyle}>
    <button onClick={handle}>Add Movie</button>
    <button onClick={() => {setCount(count-1)}}>Remove Movie</button>
  <h3>Number of movie : {count}</h3>
  <MovieDisplay movie={count}></MovieDisplay>
  <MovieDisplay movie={count +5}></MovieDisplay>
 
  </div>
  );
}
function MovieDisplay(props){
  return(
      <h4>Movies i have acted : {props.movie}</h4>
  );
}
function Hero(props){
  // console.log(props.name)
  const heroStyle= {
    border:'2px solid salmon',
    padding:'5px',
    margin:'10px',
    float:'left'
    
  }
  return (
    <div style={heroStyle}>
      <h2>I m Developer:{props.name || "jack"}</h2>
      <h3>Developer Age:{props.age || 40} years </h3>
    </div>
  );
}
export default App;
