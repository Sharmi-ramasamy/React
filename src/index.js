import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function count() {
    // const counts= (
        // <div>
        // <h1> Greetings </h1>
        // <h2>It is {new Date().toLocaleTimeString()}.</h2>
         <App />
        //  </div>
    // );
    // root.render(counts);
// }
        
// setInterval(count,2000)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> 
    <App />
 </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
