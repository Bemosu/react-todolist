import React, { useState } from 'react'
import styled from 'styled-components';

const TodoList = ({InputArea,ListContainer,TodoForm,ButtonArea}) => {
    // state 상태창 관리
  const [todos,setTodos] = useState([
    { id:0, title:'코딩하기', todo:'투두리스트 만들기', isDone:false },
    { id:1, title:'운동하기', todo:'러닝머신 뛰고오기', isDone:true },
    { id:2, title:'책읽기', todo:'자기진로교재 한권읽기', isDone:false },
  ])
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
      id : todos.length+1,
      title : title, 
      todo : todo,
      isDone: false,
    };
      setTodos([...todos, newTodos ]);
      setTitle('');
      setTodo('');
  };
  
  // 취소버튼
  const deletebutton = (id) => {
    alert(id)
    const newTodos = todos.filter((item)=> item.id !== id)
    setTodos(newTodos)
  }

  // isDone 변환
  const isDoneChangeHandler = id => {
    const newTodo = todos.map((item) => {
      return(
      item == id ? { ...item, isDone:!item.isDone } : item
    )});
    console.log('버튼의 id값은?',id);
    
    setTodos(newTodo);
    ;
}

  // 버튼 Css
  const StBtn = styled.div`
      width:100px;
      height: 30px;
      border: 0.4px solid green;
      color: black;
      font-weight: 200;
      border-radius: 10px;
      display: inline-block;
      margin: auto;
      text-align: center;
      position: relative;
      padding: 4.5px ;
      `;

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
                     todos={todos} TodoForm={TodoForm} StBtn={StBtn} deletebutton={deletebutton} isDoneChangeHandler={isDoneChangeHandler} ButtonArea={ButtonArea} />
    </div>
    </div>
  )
}

export default TodoList