export const WindowsFrame = ({ children }) => {
  return (
    <div
      className='m-10 bg-black rounded sm:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/3 bg-cover'
      style={{
        boxShadow:
          "0px 2px 40px 15px rgba(0,0,0,0.3),0px 2px 10px 4px rgba(0,0,0,0.3)",
      }}>
      <div className='h-8 bg-black flex flex-row justify-end'>
        <div className='h-8 w-12 flex justify-center items-center text-white hover:bg-gray-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M18 12H6'
            />
          </svg>
        </div>
        <div className='h-8 w-12 flex justify-center items-center text-white hover:bg-gray-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <rect
              strokeLinecap='bevel'
              strokeLinejoin='bevel'
              strokeWidth={2}
              x='7'
              y='7'
              width='10'
              height='10'
            />
          </svg>
        </div>
        <div className='h-8 w-12 flex justify-center items-center text-white hover:bg-red-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      </div>
      {children}
    </div>
  )
}
