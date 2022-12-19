// MAP Method

// nrml map() in js

// const numbers=[2,3,4,5,6];
// const double=numbers.map((num)=>num*2);
// console.log(double);

import React from 'react'

export default function ListRendering() {
    let names = ['Aspire', 'Systems', 'AspireSystems']
      return (
        <div>
            <h2>{names[0]} </h2>
            <h2>{names[1]} </h2>
            <h2>{names[2]} </h2>
        </div>
      )
    }
