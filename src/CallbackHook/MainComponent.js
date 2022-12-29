import React,{useCallback, useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function MainComponent() {
    const[age,setAge]=useState(27)
    const[salary,setSalary]=useState(27000)
    
    const incrementAge=useCallback(()=>{
        setAge(age+1)},[age])
    

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1500)
    },[salary])
    
  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <button onClick={incrementAge}>Increment Age{age} </button> <br/><br/>
      <Count text="Salary" count={salary}/>
      <button onClick={incrementSalary}>Increment Salary {salary} </button> <br/>
    </div>
  )
}
