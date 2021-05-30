import { Taskbar } from "./containers/Taskbar"
import { Todo } from "./containers/Todo"
import wallpaper from "./images/wallpaper.jpg"

export const App = () => {
  return (
    <div className='flex flex-col h-screen min-w-full justify-center w-full'>
      <div
        className='flex h-screen min-w-full justify-center bg-cover'
        style={{
          backgroundImage: `url(${wallpaper})`,
        }}>
        <Todo />
      </div>
      <Taskbar />
    </div>
  )
}
