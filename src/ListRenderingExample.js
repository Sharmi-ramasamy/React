import React, { Component } from 'react'

export class ListRenderingExample extends Component {
    strings=['HTML','CSS','javaScript','REACTJS']
  render() {
    return (
      <div> 
        <ul> 
            {/* {this.strings.map((item)=>(<li key={item.id}>{item}</li>))} */}
            {this.strings.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    )
  }
}

export default ListRenderingExample