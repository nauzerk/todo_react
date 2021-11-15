import React from 'react'

export default function Header({setOpen}) {
    return (
        <>
            <div className="App-header">
          Todo App
          <button type="button" className="btn btn-success mt-2" onClick={()=>setOpen(true)}>Create Todo</button>
        </div>
        </>
    )
}
