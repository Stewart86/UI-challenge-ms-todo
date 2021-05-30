import { useContext, useState } from "react"

import { TaskContext } from "../../contexts/TaskProvider"

export const AddTask = () => {
  const [value, setValue] = useState("")
  const [onFocus, setOnFocus] = useState(false)
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
    <div className='flex flex-row justify-center items-center bg-black rounded m-8 p-2 h-12 text-gray-500 bg-opacity-70 hover:bg-gray-900 hover:bg-opacity-70 backdrop-filter backdrop-blur-md'>
      <span
        className={`w-6 h-6 mr-4 ml-2 ${
          onFocus && "border-2 rounded-full border-gray-600"
        }`}>
        {!onFocus && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-7 h-7'
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
        )}
      </span>
      <input
        onKeyPress={handleAddTask}
        onFocus={(e) => setOnFocus((state) => !state)}
        onBlur={(e) => setOnFocus((state) => !state)}
        className='bg-transparent w-full h-full m-0 p-0 outline-none text-white'
        placeholder={!onFocus && `Add a task`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
