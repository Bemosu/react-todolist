import React from 'react'

const ListContainer = ({todos, TodoForm, StBtn, deletebutton, isDoneChangeHandler, ButtonArea}) => {
  return (
    <div className='TodoListContainer'>
        <div className='TodoWorkingList'>
        <div>
          Working!
          </div>
          <div className='WorkingListsection'>
          {todos.filter((item)=> !item.isDone).map((item) => {
          return  <div key={item.id} className='TodosItem'>
          <TodoForm item={item} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler}/>
            </div>
            })}
        </div>
        </div>
        <div className='TododoneList'>
          Done!
          {todos.filter((item)=> item.isDone).map((item) => {
          return  <div key={item.id} className='TodosItem'>
          <div className='todoItemSection'>
            <div className='todoTitle'>
            {item.title}  
            </div>
            <div className='todocontent'>
            {item.todo}
            </div>
            <ButtonArea StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler} item={item}/>
                  </div>
            </div>
            })}
        </div>
      </div>
  )
}

export default ListContainer