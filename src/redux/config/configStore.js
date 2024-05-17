import React from 'react'
import { combineReducers, createStore } from 'redux'
import todosItem from '../modules/TodoItem'


const rootReducer = combineReducers({
    todosItem : todosItem
})

const store = createStore(rootReducer)
export default store