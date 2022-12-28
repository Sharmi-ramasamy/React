import React,{useContext} from 'react'
import { EmployeeContext,DomainContext } from '../App'

export default function ComponentZ() {
    const employee=useContext(EmployeeContext)
    const domain=useContext(DomainContext)
  return (
    <div>
            <h3> Using context hook : </h3>
            <strong> The employee: {employee} is in the position of {domain[0].first} </strong>
    </div>
  )
}

  

        //  <DomainContext.Provider value={[{first:"HR",second:"Ui/Ux"}]}>