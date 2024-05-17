
import React from 'react'
import { useNavigate } from 'react-router'

const AddTodo = 'todo/addTodo'
const DeleteTodo = 'todo/deleteTodo'
const UpdateTodo = 'todo/updateTodo'

// 액션 생성자 함수
export const addTodo = (newTodos) => ({
    type: AddTodo,
    payload: newTodos
})

export const deleteTodo = (id) => ({
    type: DeleteTodo,
    payload : id
})

export const updateTodo = (id) => ({
    type:UpdateTodo,
    payload : id
})


const initialState = {
    todos:[
        { id:0, title:'코딩하기', todo:'투두리스트 만들기', isDone:false },
    { id:1, title:'운동하기', todo:'러닝머신 뛰고오기', isDone:true },
    { id:2, title:'책읽기', todo:'자기진로교재 한권읽기', isDone:false }
        ]
}

const todosItem = (state=initialState, action) => {
   switch(action.type){
    case AddTodo :
        return {
            ...state,
            todos : [...state.todos, action.payload],
        };
    case DeleteTodo:
        console.log('payload의 id는?', action.payload)
        const Id = action.payload.id
        return{
            ...state,
            todos : state.todos.filter(todo => todo.id !== Id)
        }

    case UpdateTodo:
        const updateId = action.payload.id
        return{
           ...state,
           todos : state.todos.map((todo)=> todo.id == updateId? 
            {...todo, isDone : !todo.isDone }:todo)
            
        }

    default:
        return state
   }
   
}

export default todosItem;