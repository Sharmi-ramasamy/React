import React from 'react'

export default function Person({person}) {
  return (
    <div>
        <h2> I am {person.name}, I am {person.age} years old. My id is {person.id} and my skill is {person.skill}</h2>
    </div>
  )
}
