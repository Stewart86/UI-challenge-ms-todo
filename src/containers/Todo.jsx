import { AddTask } from "../components/AddTask"
import { MyDay } from "../components/MyDay"
import React from "react"
import { TaskList } from "../components/TaskList"
import fern from "../images/ferns.jpg"

export const Todo = () => {
  return (
    <div
      className='m-10 bg-gray-600 rounded sm:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/3 bg-cover'
      style={{
        backgroundImage: `url(${fern})`,
        boxShadow:
          "0px 2px 40px 15px rgba(0,0,0,0.3),0px 2px 10px 4px rgba(0,0,0,0.3)",
      }}>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col flex-start h-5/6 overflow-auto'>
          <MyDay />
          <TaskList />
        </div>
        <AddTask />
      </div>
    </div>
  )
}
