import React from 'react'
import {  useLocation, useNavigate, useParams } from 'react-router'
import { DetailForm, StBtn } from '../components/ButtonDesign'
import { useSelector } from 'react-redux'


const TodoDetail = () => {
    // 받은 데이터의 id를 표시하기 위해 parms사용

    const location = useLocation()
    const navigate = useNavigate()
    const id = location.state.id;
    const title = location.state.title;
    const todo = location.state.todo;
   
    
    console.log('받은 id', location)
    console.log('todo의 값',todo)


    return (
      <DetailForm>
        <>
          <StBtn style={{marginLeft:'67%',}} onClick={()=>navigate('/')}>이전으로</StBtn>
          <div style={{paddingLeft:'5%'}}>id : {id}</div>
          <div style={{fontSize:'20px', fontWeight:'bold',paddingLeft:'5%'}}> 제목 : {title} </div>
          <div style={{paddingLeft:'5%'}}> 할일 : {todo}</div>
        </>
         
          </DetailForm>
        
    
  )
}

export default TodoDetail