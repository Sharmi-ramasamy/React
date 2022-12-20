import React from 'react'

export default function ListandKeys() {
    const courses=[
        {id:1,name:'React'},
        {id:2,name:'Angular'},
        {id:3,name:'JavaScript'},
        {id:4,name:'CSS'},
        {id:5,name:'HTML'},
        {id:6,name:'Mean'},
        {id:7,name:"Mern"},
        {id:8,name:'PHP'}
    ];
    // nested array
    const Developer=[
        {
            name:"Abc",
            skills: [
                {name:'ReactJs',type:'frontend'},
                {name:'NodeJs',type:'backend'}  
            ]
        },
        {
            name:'Xyz',
            skills:[
                {name:'Angular',type:'frontend'},
                {name:'ExpressJs',type:'backend'}
            ]
        }
    ];
    const person= {
        name:'Abc',
        email:'abc123@gmail.com'
    }
    return (
        <div>
            <h2> React list and Keys </h2>
            {/* <ul> 
                {
                    courses.map(data=>(
                        <li> {data.name} </li>
                    ))
                }
            </ul> */}
            {/* <ul> 
                {
                    courses.map(data=>(
                        <li key={data.id}> {data.name} </li>
                    ))
                }
            </ul> */}
            <ul> 
                {
                    courses.map((data,index)=>(
                        <li key={index}> {data.name} </li>
                    ))
                }
            </ul>
            <div>
                {Developer.map((dev,index)=>(
                    <div key={index}>
                        <h2>{dev.name} Skills </h2>
                        <div>
                        {dev.skills.map((skill,index)=>(
                            <p key={index}> 
                             {skill.type}-{skill.name}
                            </p>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            <div> 
                {Object.keys(person).map(key=>(
                    <p>{person[key]}</p>
                ))}
            </div>
        </div>
    )
}