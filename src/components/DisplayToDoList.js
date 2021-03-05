import React from 'react'

function DisplayToDoList(props) {
    let todoList = props
    console.log("props: ", props)
    const list = props.todoList
    console.log("list", list)

    const deleteTask = id => props.onDeleteTask(id);
        
    
    return (
        
        <div className="TodoList" >
            {

                (props.todoList || []).map((task)=>{
                // <div>Props: {props.todoList}</div>
                    return(
                    <div key={task.id}>
                        <b>{task.item}</b>
                        <button onClick={()=>deleteTask(task.id)}>Done</button>
                    </div>
                

                )})
            
            

            
        }
        </div>
           
        
    )
}

export default DisplayToDoList
