
import './App.css';
import React, { Component } from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap'
 class App extends Component {
   state={
    todos:[ {
      id:1,
      text:"learn react",
      done:false
    },{
      id:2,
      text:"learn css",
      done:false
    }  
    ]
    ,text:""
    }
    addtodo=(newtodo)=>{this.setState({todos:[...this.state.todos,newtodo]} );
  this.setState({text:""} )}
    deletetodo=(id)=>{this.setState({todos:this.state.todos.filter (todo=>todo.id!=id)})}
     donetodo=(id)=>{this.setState({todos:this.state.todos.map(todo=>todo.id===id?{...todo,done:!todo.done} :todo)})}
  render() {
    return (
      <div >
      <InputGroup className="mb-3" style={{width:"400px",margin:"auto",padding:"10px"}}>
    <FormControl 
    value={this.state.text}
    type='text' 
    placeholder="new task..." 
    onChange= {e => this.setState({text:e.target.value})}
    />
    <Button variant="outline-info" id="button-addon1" onClick={()=>
      this.state.text?this.addtodo({id:Math.random(),text:this.state.text,done:false}):null  }>
      Add
    </Button>
  </InputGroup>
        {this.state.todos.map(todo=>(<div 
          style={{display:"flex",justifyContent:"space-around",margin:"auto",width:"400px",padding:"10px"}} >
        <p style={{textDecoration:todo.done?"line-through":null}}>{todo.text} </p>
        <Button variant="danger" onClick={()=>this.deletetodo(todo.id)}>Delete</Button>
         <Button variant="primary" onClick={()=>this.donetodo(todo.id)}>Done</Button> 
        <Button variant="secondary">Edit</Button></div> 
        ))}
         
        
      </div>
    )
  }
}
export default App; 



