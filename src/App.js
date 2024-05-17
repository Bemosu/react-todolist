import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import InputArea from './components/InputArea';
import ButtonArea from './components/ButtonArea';
import TodoForm from './page/TodoForm';
import ListContainer from './page/ListContainer';
import TodoList from './page/TodoList';
import Index from './page/LayOut';
import Router from './shared/router';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

function App() {
  
  return (
    <Provider store={store}>
  <Router></Router>
  </Provider>
  );
}


export default App;
