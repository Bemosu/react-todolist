import React from 'react'

const ButtonArea = ({StBtn,deletebutton,isDoneChangeHandler,item}) => {
  return (
    <div className='Buttonsection'>
    <StBtn onClick={() => deletebutton(item.id)}>삭제하기</StBtn >
    <StBtn onClick={() => isDoneChangeHandler(item)}>{item.isDone? '취소' : '완료'}</StBtn >
    </div>
  )
}

export default ButtonArea