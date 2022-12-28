import React,{useState,useCallback} from 'react'

const AddTwo=()=> {
    const [name, setName] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const ans = useCallback(() => {
       adder(num1, num2);
    },[]);
    return (
       <div>
          <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
          <input placeholder="Value 1" value={num1} onChange={(event) => setNum1(event.target.value)}/>
          <input placeholder="Value 2" value={num2} onChange={(event) => setNum2(event.target.value)}/>
          {ans}
       </div>
    );
 };
 const adder = (a1, a2) => {
    console.log('Adding numbers');
    return parseInt(a1) + parseInt(a2);
 };
 

export default AddTwo