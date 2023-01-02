import React,{useState} from 'react'

export default function UserForm() {
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')

    const handleSubmit=event=> {
        event.preventDefault()
        alert(`Hello ${fname} ${lname}`)
    }

  return (
    <div>
        <h3> Custom Hooks 3 </h3>
       <form onSubmit={handleSubmit}>
         <div>
            <label> First name </label>
            <input  value={fname} onChange={event=>setFname(event.target.value)} type='text'/> <br/><br/>  
         </div>
         <div>
         <label> Last name </label>
            <input value={lname} onChange={event=>setLname(event.target.value)} type='text'/> <br/> <br/> 
         </div>
         <button> Submit </button>
       </form>
    </div>
  )
}
