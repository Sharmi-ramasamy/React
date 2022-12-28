import React,{useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function MainComponent() {
    const[age,setAge]=useState(27)
    const[salary,setSalary]=useState(27000)
    
    const incrementAge=()=>{
        setAge(age+1)
    }

    const incrementSalary=()=>{
        setSalary(salary+1500)
    }
  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age </Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary </Button>
    </div>
  )
}
