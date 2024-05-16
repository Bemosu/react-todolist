import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import InputArea from './components/InputArea';
import ButtonArea from './components/ButtonArea';
import TodoForm from './page/TodoForm';
import ListContainer from './page/ListContainer';
import TodoList from './page/TodoList';
import Index from './page/Index';

function App() {
 
  return (
    <Index
      TodoList={TodoList}
      InputArea={InputArea} 
      ListContainer={ListContainer} 
      TodoForm={TodoForm} 
      ButtonArea={ButtonArea}/>
  );
}


export default App;
