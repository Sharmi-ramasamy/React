import React from 'react'
import { userContext,courseContext } from '../App'


export default function ComponentFF() {
  return (
    <div>
      <userContext.Consumer>
        {
          user=>{
              return (
                <courseContext.Consumer> 
                  {
                    course=> {
                      return <div> User Context Value: {user},Course name: {course} </div>
                    }
                  }
                </courseContext.Consumer>
              )
          }
        }
      </userContext.Consumer>
    </div>
  )
}
