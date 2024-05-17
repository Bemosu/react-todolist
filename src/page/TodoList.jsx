import React, { useState } from 'react'
import InputArea from '../components/InputArea';
import ListContainer from './ListContainer';
import TodoForm from './TodoForm';
import ButtonArea from '../components/ButtonArea';
import { StBtn } from '../components/ButtonDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../redux/modules/TodoItem';

const TodoList = () => {
  const todoItems = useSelector((state)=>{
    return state.todosItem.todos
  })
  const dispatch = useDispatch()
    // state 상태창 관리
  const [title,setTitle] = useState('');
  const [todo,setTodo] = useState('');
 
  // 변화 감지 이벤트핸들러 
  const titleChangehandler = (event) => {
    setTitle(event.target.value)
  }

  const todoChangehandler = (event) =>{
    setTodo(event.target.value)
  }

  // 할일 추가 버튼
  const Addbuttonhandler = () => {
    const newTodos = {
      id : Date.now(),
      title : title, 
      todo : todo,
      isDone: false,
    };
      dispatch(addTodo(newTodos));
      setTitle('');
      setTodo('');
  };
  
  // 취소버튼
  const deletebutton = (id) => {
    console.log('현재 보내지고 있는 id값은?', id)
    dispatch(deleteTodo(id))
  }

  // isDone 변환
  const isDoneChangeHandler = id => {
    dispatch(updateTodo(id));
    ;
}


  return (
    <div className='layout'>
    <div className="Mainpage">
      <span>MY TodoList</span>
      <InputArea
                  title={title} 
                  titleChangehandler={titleChangehandler} 
                  todo={todo} todoChangehandler={todoChangehandler} 
                  Addbuttonhandler={Addbuttonhandler}
                  StBtn={StBtn}/>
      <ListContainer 
                   TodoForm={TodoForm} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler}  />
    </div>
    </div>
  )
}

export default TodoList