import React from 'react'
import ButtonArea from '../components/ButtonArea'

const TodoForm = ({item, StBtn,deletebutton,isDoneChangeHandler}) => {
  return (
    
    <div className='todoItemSection'>
        <div className='todoTitle'>
        {item.title}  
        </div>
        <div className='todocontent'>
        {item.todo}
        </div>
    <ButtonArea StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler} item={item}/>
    </div>
  )
}

export default TodoForm