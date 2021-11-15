import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Card'
import '../App.css';
import Stack from 'react-bootstrap/Stack'

export default function TodoList({taskList, deleteTodo}) {
    return (
        <> 
        <Stack direction="horizontal"  className="App-content mt-2 px-5" gap={1}>         
                  {taskList.length>0?(
                    taskList.map((task,id)=>(
                    <Col className="card mt-2" key={id}>
                      <Card style={{ maxWidth: '22rem' }}>    
                              <Card.Body>
                                <Card.Title>{task.name}</Card.Title>
                                <Card.Text>
                                  {task.id}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                              <FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>deleteTodo(id)}/>
                              </Card.Footer>
                      </Card>
                    </Col> 
                      ))):(<div className="NoContent">Please add the task</div>) }
                      </Stack>  
                  </>
    )
}
