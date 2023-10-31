import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const[value,setValue]=useState(task.task)
    const handleChange=(e)=>{
        const result=e.target.value
        setValue(result)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        editTodo(value,task.id)
        setValue('')
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update the task' onChange={handleChange}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
