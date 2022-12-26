import React from 'react'

export default function NameList3() {

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
const personList=persons.map((person)=>
<h2> I am {person.name}, I am {person.age} years old. My id is {person.id} and my skill is {person.skill}</h2>)
return <div> {personList} </div>

}
