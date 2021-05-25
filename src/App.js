import { TaskProvider } from "./contexts/TaskProvider"
import { Todo } from "./containers/Todo"
import wallpaper from "./images/wallpaper.jpg"

export const App = () => {
  return (
    <TaskProvider>
      <div
        className=' container flex h-screen min-w-full justify-center bg-cover w-full'
        style={{
          backgroundImage: `url(${wallpaper})`,
        }}>
        <Todo />
      </div>
    </TaskProvider>
  )
}
