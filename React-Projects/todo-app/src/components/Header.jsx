import React from 'react'

const Header = () => {
  return (
    <div className='w-2/4 mx-auto flex justify-between items-center mb-5'>
        <button className='bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-md'>Add Task</button>
        <select className='bg-[#CCCDDE] p-3 rounded-md'>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
        </select>
    </div>
  )
}

export default Header