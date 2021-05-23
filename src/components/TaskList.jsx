import React, { useContext, useState } from "react"

import { TaskContext } from "../contexts/TaskProvider"

export const TaskList = () => {
  const [hideComplete, setHideComplete] = useState(true)
  const { tasks, done, handleFavourite, handleDone, handleUndone } =
    useContext(TaskContext)

  return (
    <>
      <div className='flex flex-col mt-4 space-y-1'>
        {tasks?.map((task, index) => (
          <div
            key={index}
            className='flex flex-col mx-10 p-2 bg-gray-900 text-gray-300 hover:bg-gray-800 h-full rounded'>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row items-center'>
                <button
                  value={task.title}
                  onClick={() => handleDone(index)}
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
                  <div>{task.title}</div>
                  <div className='text-xs text-gray-400'>Tasks</div>
                </div>
              </div>
              <button
                className='flex items-center justify-cente outline-none focus:outline-none'
                onClick={() => handleFavourite(index)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-4'
                  fill={task.isFavourite ? "currentColor" : "none"}
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        {done.length > 0 && (
          <>
            <div className='flex flex-col mt-4 space-y-1'>
              <div className='flex flex-rol mx-10 my-2 py-0 w-auto'>
                <button
                  onClick={(e) => setHideComplete((state) => !state)}
                  className='flex flex-rola justify-center items-center rounded p-1 py-1  bg-black text-white outline-none focus:outline-none'>
                  <div
                    className={`text-white ${
                      hideComplete ? "border-b-2" : "border-t-2"
                    } border-r-2 transition-transform transform rotate-45 border-gray-300 w-2 h-2 p-0 mx-3 `}></div>
                  <div className='mr-1 text-sm'>
                    Completed <span className='ml-2'>{done.length}</span>
                  </div>
                </button>
              </div>
              {hideComplete &&
                done?.map((task, index) => (
                  <div
                    key={index}
                    className='flex flex-col mx-10 p-2 bg-gray-900 text-gray-300 hover:bg-gray-800 h-full rounded'>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-row items-center'>
                        <button
                          value={task.title}
                          onClick={() => handleUndone(index)}
                          className='flex items-center justify-center rounded-full w-6 h-6 mr-4 ml-2 border-gray-300 bg-gray-300 border-2 outline-none focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={`h-4 w-4 text-gray-900`}
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
                          <div className='line-through text-xs'>
                            {task.title}
                          </div>
                          <div className='text-xs text-gray-400'>Tasks</div>
                        </div>
                      </div>
                      <button
                        className='flex items-center justify-cente outline-none focus:outline-none'
                        onClick={() => handleFavourite(index)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 mr-4'
                          fill={task.isFavourite ? "currentColor" : "none"}
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
