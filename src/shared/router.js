import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../page/LayOut'
import TodoDetail from '../page/TodoDetail'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOut/>}></Route>
            <Route path='/:id' element={<TodoDetail/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router