import React, { useState } from 'react'

export default function Add() {

   const [name, setName] = useState('');
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const ans = adder(num1, num2);
   return (
      <div>
         <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
         <input placeholder="Value 1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
         <input placeholder="Value 2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
         {ans}
      </div>
   );
};

const adder = (a1, a2) => {
   console.log('Adding numbers');
   return parseInt(a1) + parseInt(a2);
};


