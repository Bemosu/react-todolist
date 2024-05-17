import React from 'react'
import { useSelector } from 'react-redux'

const ButtonArea = ({item,StBtn,deletebutton,isDoneChangeHandler}) => {
  const todoItmes = useSelector((state)=>
    state.todosItem.todos
  )
  return (
    <div className='Buttonsection'>
    <StBtn onClick={() => deletebutton(item)}>삭제하기</StBtn >
    <StBtn onClick={() => isDoneChangeHandler(item)}>{todoItmes.isDone? '취소' : '완료'}</StBtn >
    </div>
  )
}

export default ButtonArea