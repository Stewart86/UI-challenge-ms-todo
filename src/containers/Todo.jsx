import { AddTask } from "../components/AddTask"
import { MyDay } from "../components/MyDay"
import React from "react"

export const Todo = () => {
  return (
    <div className='m-10 bg-gray-600 shadow-md rounded sm:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/3'>
      <div className='flex flex-col justify-between h-full'>
        <MyDay />
        <AddTask />
      </div>
    </div>
  )
}
