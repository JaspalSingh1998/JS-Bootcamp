import React, {useState} from 'react'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([1, 2, 3]);  
  return (
    <div className='w-2/4 mx-auto mb-5 bg-[#ECEDF6] px-5 py-6 rounded-xl'>
        {todos.length ? todos.map(todo => <Todo key={todo}/>): <p className="p-2 bg-[#DEDFE1] text-[#585858] font-bold inline rounded-md">No Todo</p>}
    </div>
  )
}

export default TodoList