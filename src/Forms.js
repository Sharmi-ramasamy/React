// Controlled components for input tag

import React,{Component} from 'react'

export class Forms extends Component {
    constructor() {
        super()
        this.state={
            username:'',
            comments:'',
            topics:''
        }
        this.handleComments=this.handleComments.bind(this)      // constructor binding -2
    }
    handleUsername=(event)=> {          // arrow function so no need of binding - 4
      this.setState({
        username:event.target.value
      })
    }
    handleComments(event) {            // constructor binding - 2
        this.setState({
            comments:event.target.value
        })
    }
    handleValue(event) {              // render() binding -1
        this.setState({
            topics:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }
    render() {
        return(
            // <form onSubmit={this.handleSubmit}>     
            <form>
                <h2> Forms </h2>
            <div>
                <label> Username: </label>
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
            </div>
            <br/>
            <div>
                <label> Comments  </label>
                    <textarea value={this.state.comments} onChange={this.handleComments}> </textarea>
            </div>
            <br/>
            <div>
             <label> Topic </label>
             {/*  render() binding  */}
             <select value={this.state.topics} onChange={this.handleValue.bind(this)}>          
                <option value='choose'> --- Select --- </option>
                <option value='html'> HTML </option>
                <option value='css'> CSS </option>
                <option value='javascript'> JAVASCRIPT </option>
             </select>
             </div><br/>
             <button onClick={this.handleSubmit}> Submit </button>
            </form>
        )
    }
}

export default Forms