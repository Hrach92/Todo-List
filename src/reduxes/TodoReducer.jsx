import React from "react";
const UPDATE_TODO='UPDATE TODO'
const ADD_TODO='ADD TODO'
const IS_COMPLETED='IS COMPLETED'
const DELETE_COMPLETED='DELETE COMPLETED'

const initialState={
    todo:[],
    newTodo:'',
    completed:0
}

const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_TODO:
            return {
                ...state,
                newTodo:action.todo
            }
        case ADD_TODO:{
            let stateCopy={...state}
            stateCopy.todo=[...state.todo]
            let newTodos={name:state.newTodo,completed:false,id:Math.random()}
            stateCopy.todo.push(newTodos)
            return stateCopy
        }
        case IS_COMPLETED:
            return {
                ...state,
                completed:state.todo.filter(t=>t.completed===true).length
            }
        case DELETE_COMPLETED:{
            return {
                ...state,
                todo:state.todo.filter(t=>t.completed===false)
            }
        }
        default:
            return state
    }
}
export default TodoReducer

export let updateTodo=(todo)=>{
    return {type:UPDATE_TODO,todo}
}
export let addTodo=()=>{
    return {type:ADD_TODO}
}
export let isCompleted=()=>{
    return {type:IS_COMPLETED}
}
export let deleteCompleted=()=>{
    return {type:DELETE_COMPLETED}
}