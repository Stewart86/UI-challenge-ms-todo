import edge from "../../images/Edge Profile.ico"
import github from "../../images/app.ico"
import todo from "../../images/todo.png"

export const LeftTask = () => {
  return (
    <div className='flex flex-start items-center'>
      <div className='flex justify-center items-center w-9 h-8 text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='white'
          viewBox='0 0 24 24'
          stroke='none'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801'
          />
        </svg>
      </div>
      <div className='flex justify-center items-center w-9 h-8 text-white hover:bg-gray-700'>
        <img className='w-4 h-4' src={github} alt='github icon' />
      </div>
      <div className='flex justify-center items-center w-9 h-8 text-white hover:bg-gray-700'>
        <img className='w-4 h-4' src={edge} alt='edge icon' />
      </div>
      <div className='flex justify-center items-center w-9 h-8 text-white bg-gray-700 border-b-2 border-gray-500'>
        <img className='h-4' src={todo} alt='todo app icon' />
      </div>
    </div>
  )
}
