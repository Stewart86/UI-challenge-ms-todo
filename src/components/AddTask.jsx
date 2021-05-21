import React, { useContext, useState } from "react"

import { TaskContext } from "../contexts/TaskProvider"

export const AddTask = () => {
  const [value, setValue] = useState("")
  const { handleSetTasks } = useContext(TaskContext)

  const handleAddTask = (e) => {
    if (e.key === "Enter") {
      const task = {
        title: e.target.value,
        isDone: false,
        isFavourite: false,
        hasDueDate: false,
        hasAlarm: false,
        hasRepeat: false,
        note: null,
        steps: [],
        assignTo: null,
      }
      handleSetTasks(task)
      setValue("")
    }
  }

  return (
    <div className='flex bg-gray-800 rounded mx-10 mb-8 p-3 text-white bg-opacity-90 hover:bg-gray-900 hover:bg-opacity-70'>
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-3 '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </span>
      <input
        onKeyPress={handleAddTask}
        className='bg-transparent w-full h-full m-0 p-0 outline-none text-white'
        placeholder='Add a task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
