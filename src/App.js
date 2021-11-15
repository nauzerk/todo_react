import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import React,{useState} from 'react'
//import {Card, Row, Col, CardText, CardTitle, CardGroup} from 'reactstrap'

import TodoList from './components/TodoList';

function App() {

  const [open, setOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setOpen(!open);  

  const addTask = (todo)=>{
    let tempList = taskList
    tempList.push(todo);
    setTaskList(tempList);
    console.log(taskList);

  }

  const deleteTodo = id =>{
    let tempList = [...taskList]
    tempList.splice(id,1);
    setTaskList(tempList);
  }
  
  
  return (
    <>
        <Header setOpen={setOpen}/>
        <TodoList taskList={taskList} deleteTodo={deleteTodo}/>
        <CreateTask open={open} toggle={toggle} addTask={addTask}/>
  
  </>
  );
}

export default App;
