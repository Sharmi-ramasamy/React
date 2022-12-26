import React from 'react'

export default function NamesList2() {
    const names=['Seethu','Monu','Geethu']
    const nameList=names.map(name=> <h2> {name} </h2>)
  return (
    <div>
        <h3><u> Type 3</u></h3>
        {nameList}
    </div>
  )
}
