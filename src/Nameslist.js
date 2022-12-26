import React from 'react'

export default function Nameslist() {
    const names=['Seethu','Geethu','Monu']
  return (
    <div>
        <h3><u> Type 1 </u></h3>
        <h2> {names[0]} </h2>
        <h2> {names[1]} </h2>
        <h2> {names[2]} </h2>
    </div>
  )
}
