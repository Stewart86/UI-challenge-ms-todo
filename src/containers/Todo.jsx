import { AddTask } from "../components/Todo/AddTask"
import { MyDay } from "../components/Todo/MyDay"
import { TaskList } from "../components/Todo/TaskList"
import { TaskProvider } from "../contexts/TaskProvider"
import { WindowsFrame } from "../components/WindowsFrame"
import fern from "../images/ferns.jpg"

export const Todo = () => {
  return (
    <TaskProvider>
      <WindowsFrame>
        <div
          className='bg-black rounded w-full h-full bg-cover'
          style={{
            backgroundImage: `url(${fern})`,
          }}>
          <div className='flex flex-col bg-gradient-to-b from-black to-transparent bg-opacity-40 justify-between h-full'>
            <div className='flex flex-col flex-start h-5/6 overflow-auto'>
              <MyDay />
              <TaskList />
            </div>
            <AddTask />
          </div>
        </div>
      </WindowsFrame>
    </TaskProvider>
  )
}
