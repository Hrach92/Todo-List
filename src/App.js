import { useState } from "react"
import { connect } from "react-redux"
import { updateTodo ,addTodo,isCompleted,deleteCompleted} from "./reduxes/TodoReducer"
import app from './App.module.css'
import {IoIosAddCircle} from 'react-icons/io'

function App(props) {
  const [value,setValue]=useState('')
  const onchange=(e)=>{
    setValue(e.target.value)
    props.updateTodo(e.target.value)
  }
  const onAdd=()=>{
    if(props.todos.newTodo) return props.addTodo(),props.updateTodo(''),setValue('')
  }
  return <div className={app.container}>
    <div><input className={app.input} placeholder="Enter..." type='text' onChange={onchange} value={value}/><button className={app.btn} onClick={onAdd}><IoIosAddCircle className={app.icon}/></button></div>
    <div>{props.todos.todo.map(t=><div className={app.todo} key ={t.id}>{t.name}<input className={app.check} type='checkbox' onChange={(e)=>{
      if(e.target.checked) return t.completed=true,props.isCompleted()
      return t.completed=false,props.isCompleted()
    }}/></div>)}</div>
    <div>Comleted {props.todos.completed}/{props.todos.todo.length} <button onClick={()=>{
      return props.deleteCompleted(),props.isCompleted()}}>Delete Comleted</button></div>
    </div>
}

let mapStateToProps=(state)=>{
  return {
    todos:state.todos
  }
}
export default connect(mapStateToProps,{updateTodo,addTodo,isCompleted,deleteCompleted})(App)