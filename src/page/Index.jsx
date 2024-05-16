import React from 'react'

const Index = ({TodoList,InputArea,ListContainer,TodoForm,ButtonArea}) => {
  return (
    <div>
        <TodoList InputArea={InputArea} ListContainer={ListContainer} TodoForm={TodoForm} ButtonArea={ButtonArea}/>
    </div>
  )
}

export default Index