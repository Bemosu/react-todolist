import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([
  {
    id : 1,
    title : '코딩',
    todo : '투두리스트하기',
  },
  {
    id : 2,
    title : '점심',
    todo : '점심밥먹기'
  }
  ])

  const [title,setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const titleChangehandler = (event) => {
    setTitle(event.target.value)
  }

  const todoChangehandler = (event) =>{
    setTodo(event.target.value)
  }

  const Addbuttonhandler = () => {
    
    const newTodos = {
      id : todos.length+1,
      titie : title,
      todo : todo ,
    }
      setTodos([...todos, newTodos ])
  }
  return (
    <div className="App">
      <div className='Header'>
        제목 :<input 
                value={title}
                onChange={titleChangehandler}
                ></input>
        할일 :<input 
                value={todo}
                onChange={todoChangehandler}></input>
        <button onClick={Addbuttonhandler}>추가</button>

        <div className='TodoListItems'>
          {todos.map((item) => {
          return  <div key={item.id} className='TodosItem'>
            {item.title} {item.todo}</div>
          })}
        
        </div>
      </div>
    </div>
  );
}

export default App;
