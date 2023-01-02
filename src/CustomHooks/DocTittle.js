// DocTittle,DocTittleOne,useDocumentTitle

import React,{useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

export default function DocTittle() {
    const[count,setCount]=useState(0)

    useDocumentTitle(count)
  return (
    <div>
      <h3> Custom Hooks </h3>
        <button onClick={()=>setCount(count+1)}> count -{count} </button>
    </div>
  )
}
