import React from "react"
import { todayDate } from "../utils/date"

export const MyDay = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col'>
        <h1 className='text-4xl text-gray-300 font-semibold ml-10 mt-10'>
          My Day
        </h1>
        <h2 className='text-base text-white mx-10'>{todayDate()}</h2>
      </div>
      <div className='flex flex-row  mr-10 mt-10 space-x-4'>
        <div className='bg-gray-800 rounded hover:bg-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 m-1 text-gray-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            />
          </svg>
        </div>
        <div className='bg-gray-800 rounded hover:bg-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 m-1 text-gray-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
