import React from 'react'
import { useSelector } from 'react-redux'

const ListContainer = ({TodoForm, StBtn, deletebutton, isDoneChangeHandler}) => {
  const todoItems = useSelector((state)=>
    state.todosItem.todos
  )
  // const workingList = todoItems.filter(item => !item.isDone)

  return (
    <div className='TodoListContainer'>
        <div className='TodoWorkingList'>
          <div>
          Working!
          </div>
          <div className='WorkingListsection'>
            {/* {workingList} */}
          {todoItems.filter((item)=> !item.isDone).map((item) => {
          return  <div key={item.id} className='TodosItem'>
          <TodoForm item={item} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler}/>
            </div>
            })}
        </div>
        </div>
        <div className='TododoneList'>
          <div>
          Done!
          </div>
          <div className='TododoneListsection'>
          {todoItems.filter((item)=> item.isDone).map((item) => {
          return  <div key={item.id} className='TodosItem'>
          <TodoForm item={item} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler}/>
            </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default ListContainer