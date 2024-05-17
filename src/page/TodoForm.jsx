import React from 'react'
import ButtonArea from '../components/ButtonArea'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TodoForm = ({item,StBtn,deletebutton,isDoneChangeHandler}) => {
  const navigate = useNavigate()
  const moveDetail = () => {
    console.log(item)
    navigate(`/${item.id}`,{
      state: {
        id: `${item.id}`,
        title:`${item.title}`,
        todo:`${item.todo}`,
      }
    })
  }
  return (
    
    <div className='todoItemSection'>
        <StBtn onClick={()=>moveDetail({item})}>세부정보</StBtn>
        <div className='todoTitle'>
        {item.title}  
        </div>
        <div className='todocontent'>
        {item.todo}
        </div>
    <ButtonArea item={item} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler} />
    </div>
  )
}

export default TodoForm