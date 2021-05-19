import { TaskProvider } from "./contexts/TaskProvider"
import { Todo } from "./containers/Todo"

function App() {
  return (
    <TaskProvider>
      <div className='bg-gradient-to-r from-blue-300 container flex h-screen min-w-full justify-center'>
        <Todo />
      </div>
    </TaskProvider>
  )
}

export default App
