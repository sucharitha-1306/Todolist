import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value,setValue]=useState('')
    const handleChange=(e)=>{
        const result=e.target.value
        setValue(result)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={handleChange}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
