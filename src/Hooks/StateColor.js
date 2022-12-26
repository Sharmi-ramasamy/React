import React,{useState} from 'react'

export default function StateColor() {
    const [color, setColor] = useState("Red");
      
    return (
      <div>
        <h1>My favorite color is {color}!</h1>
        <button onClick={() => setColor("Blue")}> Blue </button>
        <button onClick={() => setColor("Green")}> Green </button>
        <button onClick={() => setColor("Pink")}> Pink </button>
        <button onClick={() => setColor("Orange")}> Orange </button>
      </div>
    );
  }
  