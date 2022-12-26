import React from 'react'
import Person from './Person.js'

export default function Names() {

const persons=[
  {
    id:1,
    name:'ABC',
    age:29,
    skill:'ReactJS'
  },
  {
    id:2,
    name:'MPS',
    age:20,
    skill:'Angular'
  }
]
const personList=persons.map(person=>
   <Person person={person}/>
)

return <div> {personList} </div>

}
