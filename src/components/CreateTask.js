import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function CreateTask({open,toggle,addTask}) {
        const [task,setTask] = useState([])

        const saveTask = ()=>{
          addTask(task);
          setTask([]);
          toggle(false);
        }
    return (
        <>
      <Modal isOpen={open} toggle={() => toggle()}>
          <ModalHeader className="bg-info">
            Create Task
          </ModalHeader>
          <ModalBody>
            Task 
            <textarea className='form-control' row="3" value={task.name} onChange={(e)=>setTask({id:new Date().toLocaleString(),name:e.target.value})}></textarea>            
          </ModalBody>
          <ModalFooter>
              <Button className="btn btn-sm btn-success" onClick={()=>saveTask()}>Create</Button>
              <Button className="btn btn-sm btn-danger" onClick={()=>toggle()}>Close</Button>
          </ModalFooter>
      </Modal>
    </>
    )
}
