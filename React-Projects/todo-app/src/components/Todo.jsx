import React from 'react'
import {FaTrash, FaPen} from 'react-icons/fa'
import CheckBox from './CheckBox'

const Todo = () => {
  return (
    <div className='bg-white py-5 px-3 rounded-md flex items-center justify-between mb-4'>
        <div className='flex items-center'>
           <CheckBox />
            <div className='ml-3 text-[#585858]'>
                <h2 className='font-bold'>Go To Gym</h2>
                <p className='text-xs'>2:13 PM, 02/24/2023</p>
            </div>
        </div>
        <div className='flex'>
            <div className='bg-[#EEEEEE] p-1 rounded-sm mr-2'>
                <FaTrash className='cursor-pointer'/>
            </div>
            <div className='bg-[#EEEEEE] p-1 rounded-sm mr-2'>
                <FaPen className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Todo