import React, { useContext, useState } from "react"

import { TaskContext } from "../contexts/TaskProvider"

const taskToObject = (tasks) => {
  let result = {}
  tasks.forEach((task) => {
    result[task] = false
  })
  return result
}

export const TaskList = () => {
  const { tasks } = useContext(TaskContext)
  const [hover, setHover] = useState(taskToObject(tasks))

  const toggleHover = (e) => {
    setHover((state) => {
      if (state[e.target.value] === false) {
        state[e.target.value] = true
      } else {
        state[e.target.value] = false
      }
      return state
    })
  }

  return (
    <div className='flex flex-col mt-4 space-y-1'>
      {tasks.map((task) => (
        <div
          key={task}
          className='flex flex-col mx-10 p-2 bg-gray-700 text-gray-300 hover:bg-gray-600 h-full rounded'>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
              <button
                value={task}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                className='flex items-center justify-center rounded-full w-6 h-6 mr-4 ml-2 border-gray-300 border-2 outline-none focus:outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-4 w-4 text-transparent hover:text-white`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={3}
                    d='M5 12l6 6L18 9'
                  />
                </svg>
              </button>
              <div>
                <div>{task}</div>
                <div className='text-xs text-gray-400'>Tasks</div>
              </div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
