import React from 'react'

export default function NamesList1() {
    const names=['Seethu','Monu','Geethu']
  return (
    <div>
        <h3><u> Type 2 </u></h3>
        {
            names.map((name)=> <h2> {name} </h2>)
        }
    </div>
  )
}
