import React, {useState} from 'react';
import './todo.css'
import Tasks from './Tasks';
function CreateTask()
{
    const[todo,setTodo]=useState([]);
   const[todoitem,setTodoItem] = useState('');

   function addListItem(event){
       setTodoItem(event.target.value)
   }
    function addTaskHandler(event){
        event.preventDefault();
        if(todoitem.trim().length === 0){
            console.log('No Data To Add')
        }
        else{
        setTodo([...todo,{id:Date.now(),complete:false,task:todoitem}])
        }
        setTodoItem('');
    }
    function taskStatusHandler(event){
      return todo.map(items=>{
          if(event===items.id){
              return setTodo({...items, complete: !items.complete})
          }
          return items;
      })
    }
console.log(todo)
    function deleteTaskHandler(){
        
    }
    return(
        <React.Fragment>
        <div className='todoForm'>
            <form onSubmit={addTaskHandler}>
                <input type='text'placeholder='Enter Task Here' onChange={addListItem} value={todoitem}></input>
                <input type='submit'></input>
            </form>
        </div>
        <div className='todoList'>
        {todo.length === 0 && <p style={{textAlign:'center',fontWeight:'bold',color:'white'}}>No More Pending Tasks For The Day</p>}
        {todo.length > 0 &&(
            todo.map(items=>
                <Tasks  key={items.id} id={items.id} status={items.complete} data={items.task} changeStatus={taskStatusHandler} deleteTask={deleteTaskHandler}/>
                )
        )}
        </div>
        </React.Fragment>
    )
}

export default CreateTask
