import './ToDoList.css'

function ToDoList(props){

    return (
        <div className='todo-Style'>
            <li>{props.text}</li>
            <button className='btn' onClick={() => {props.onSelectEdit(props.id)}}>Edit</button>
            <button className= 'button' onClick={() => {props.onSelect(props.id)}}>Delete</button>
        </div>
         
    )
}

export default ToDoList;