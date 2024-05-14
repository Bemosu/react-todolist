import './App.css';
import { useState } from 'react';

function App() {
  // state 상태창 관리
  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState('');
  const [todo,setTodo] = useState('');
  const [isDone,setIsdone] = useState(false)
  
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
      isDone : true
    }
      setTodos([...todos, newTodos ])
  }
  
  // 취소버튼
  const deletebutton = (id) => {
    alert(id)
    const newTodos = todos.filter((item)=> item.id !== id)
    setTodos(newTodos)
  }

  // isDone 체크
  
  return (
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
          <button className='Ip_Button' onClick={Addbuttonhandler}>추가</button>
          </div>
        </div>   
      </div>
      <div className='TodoListItems'>
        <div className='TodoWorkingList'>
          Working!
          {todos.map((item) => {
          return  <div key={item.id} className='TodosItem'>
            {item.title}  {item.todo}
            <button onClick={() => deletebutton(item.id)}>x</button>
                  </div>
            })}
        </div>
        <div className='TododoneList'>
          IsDone!
        </div>
      </div>
    </div>
  );
}

export default App;
