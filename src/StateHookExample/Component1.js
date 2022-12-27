import React,{useState} from 'react'
import Component2 from './Component2'

export default function Component1() {
    const[user,setUser]=useState('MSP')
  return (
    <div>
        <h3> {`Hi ${user}`}</h3>
        <Component2 user={user}/>
    </div>
  )
}
