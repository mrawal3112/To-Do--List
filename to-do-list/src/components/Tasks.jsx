import React from 'react';
import './todo.css'
function Tasks(props){
    return(
    <React.Fragment>
        <div style={{margin:'1rem 0'}}>
            <div className='taskContainer'>
                <p>{props.data}</p>
            </div>
            <span onClick={()=>props.changeStatus(props.id)} >Pending</span>
            <span onClick={props.deleteTask}>Delete</span>
        </div>
    </React.Fragment>
    )
}

export default Tasks