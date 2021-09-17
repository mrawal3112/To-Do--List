import React from 'react';
import './todo.css'
function Tasks(props){
    return(

    <React.Fragment>
        <div style={{margin:'1rem 0'}}>
            <div className='taskContainer' style={{border:props.status?'2px solid green':'2px solid red'}}>
                <p>{props.data}</p>
            </div>
            <span onClick={()=>props.changeStatus(props.id)} >{props.status?"Completed":"Pending"}</span>
            <span onClick={()=>props.deleteTask(props.id)}>Delete</span>
        </div>
    </React.Fragment>
    )
}

export default Tasks