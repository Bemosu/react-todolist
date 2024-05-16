import React from 'react'

const InputArea = ({title,titleChangehandler,todo,todoChangehandler,Addbuttonhandler,StBtn}) => {
  return (
    <div className='Header'>
        <div className='titlesection'> 
        제목 : <input 
        value={title}
        onChange={titleChangehandler}
        ></input> 
        </div>
        <div className='todosection'> 
        할일 : <input 
        value={todo}
        onChange={todoChangehandler}></input>
        <div className='addbuttonsection'>
        <StBtn className='Ip_Button' onClick={Addbuttonhandler}>추가하기</StBtn>
        </div>
        </div>   
  </div>
  )
}

export default InputArea