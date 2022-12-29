import React,{useState,useMemo} from 'react'
import MemoChild from './MemoChild'

export default function MemoParent() {
const[count,setCount]=useState(27)
const memoChild=useMemo(()=><MemoChild/>,[])
  return (
    <div>
        <h2> Memo Hook </h2>
        <button onClick={()=>{setCount(count+1)}}> Count : {count} </button>
        {memoChild}
    </div>
  )
}
