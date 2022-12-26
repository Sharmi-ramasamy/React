import React,{useState} from 'react'

export default function StateHookObject() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <form>
        <input type='text' value={name.firstName} onChange={event=>setName({...name,firstName: event.target.value})}/>
        <input type='text' value={name.lastName} onChange={event=>setName({...name,lastName: event.target.value})}/>
        <h3> First name : {name.firstName} </h3>
        <h3> Last name: {name.lastName} </h3>
        <h2> </h2>
        </form>
    </div>
  )
}
