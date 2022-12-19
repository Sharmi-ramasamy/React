
    // To use map method to render the list of names

    import React from 'react'

    export default function ListRendering() {
    //     const names=['AspireSystems','Aspire','System']
    //     const nameList=names.map((name) => <h2> {name} </h2>)
    //     return (
    //     <div> {nameList} </div>  
    //     )               
    // }



const numbers=[2,3,4];
const double=numbers.map((numb)=><h2 key={numb}> {numb*2} </h2>)
return (
    <div> {double} </div>
)

}


    