import React from "react"

const todayDate = () => {
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const date = new Date()
  return `${WEEKDAY[date.getDay()]}, ${date.getDate()}, ${
    MONTH[date.getMonth()]
  }`
}

export const Todo = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col justify-between min-h-screen'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-bold ml-10 mt-10'>My Day</h1>
            <h2 className='text-md mx-10'>{todayDate()}</h2>
          </div>
          <div className='flex flex-row  mr-10 mt-10 space-x-4'>
            <div className='bg-gray-200 rounded'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 m-1'
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
            <div className='bg-gray-200 rounded'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 m-1'
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
        <div className='flex bg-gray-200 rounded mx-10 mb-10 p-4'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-3'
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
          Add a task
        </div>
      </div>
    </div>
  )
}
