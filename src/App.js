import logo from './logo.svg';
import './App.css';
import Home from'./Home.js';
import Product from './Product.js';
import Color from './Color';
import Welcome from './Welcome';
import Car from './Car';
import Garage from './Car';
import Cars from './Cars';
import Clock from './Clock';
import Clock2 from './Clock2';
import Clock3 from './Clock3';
// import Demo from './Demo.js';

function App() {
  return (
    <div className="App">
     <h1> Welcome to ReactJS </h1>

     {/* <Home name="Janu" position="HR"> I am beginner </Home>
     <Home name="Geethu" position="HR"> I am beginner </Home>
     <Home name="Seethu" position="HR">  </Home>
     <Home name="Monu" position="">  </Home>
     <Product name="Android" price="50K"/> */}
     <Color/>
     {/* <Demo/> */}

    <Welcome name="Sara"/>
    <Welcome name="Thara"/>     
    {/* composing component */}
  

     <Cars brand="Ford"/>
     <Clock date={new Date()}/>
     {/* <Clock2 date={new Date()}/> */}
     {/* <Clock3/> */}

    </div>
  );
}

export default App;
