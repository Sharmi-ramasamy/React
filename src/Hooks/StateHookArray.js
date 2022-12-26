import React,{useState} from 'react'

export default function StateHookArray() {
    const[items,setItems]=useState([])

    const addItem=()=>{setItems([...items,{
        id:items.length,value:Math.floor(Math.random()*27)+1
    }])
}
  return (
    <div>
        <button onClick={addItem}> Add number </button>
        <ul>
            {items.map(item=> (
                <li key={item.id}>{item.value}</li>
                ))}
        </ul>
    </div>
  )
}
