import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

function App() {
  // state 상태창 관리
  const [todos,setTodos] = useState([
    { id:0, title:'코딩하기', todo:'투두리스트 만들기', isDone:false },
    { id:1, title:'운동하기', todo:'러닝머신 뛰고오기', isDone:true },
    { id:2, title:'책읽기', todo:'자기진로교재 한권읽기', isDone:false },
  ])
  const [title,setTitle] = useState('');
  const [todo,setTodo] = useState('');
  const [isDone,setisDone] = useState(false)
  
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
      isDone : isDone 
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
  const isDoneChangeHandler = (id) => {
    alert(id)
    console.log('해당 isDone은?',id.isDone)
    const newTodo = todos.map(item => 
      item.id === id ? { ...item, isDone:!item.isDone } : item
    );
    setTodos(newTodo);
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
      <div className='TodoListContainer'>
        <div className='TodoWorkingList'>
        <div>
          Working!
          </div>
          <div className='WorkingListsection'>
          {todos.filter((item)=> !item.isDone).map((item) => {
          return  <div key={item.id} className='TodosItem'>
          <div className='todoItemSection'>
            <div className='todoTitle'>
            {item.title}  
            </div>
            <div className='todocontent'>
            {item.todo}
            </div>
            <div className='Buttonsection'>
            <StBtn onClick={() => deletebutton(item.id)}>삭제하기</StBtn >
            <StBtn onClick={() => isDoneChangeHandler(item.id)}>{item.isDone? '취소' : '완료'}</StBtn >
            </div>
                  </div>
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
            <div className='Buttonsection'>
            <StBtn onClick={() => deletebutton(item)}>삭제하기</StBtn >
            <StBtn  onClick={() => isDoneChangeHandler(item)}>{item.isDone? '취소' : '완료'}</StBtn >
            </div>
                  </div>
            </div>
            })}
        </div>
      </div>
    </div>
    </div>
  );
}


export default App;
