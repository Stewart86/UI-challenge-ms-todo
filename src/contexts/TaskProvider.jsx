import { createContext, useEffect, useState } from "react"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  )
  const [done, setDone] = useState(
    () => JSON.parse(localStorage.getItem("done")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done))
  }, [done])

  const handleSetTasks = (task) => {
    setTasks((state) => [...state, task])
  }

  const handleFavourite = (index) => {
    let newState = tasks[index]
    if (newState.isFavourite) {
      newState.isFavourite = false
    } else {
      newState.isFavourite = true
    }
    const removeItem = tasks.splice(index, 1)
    console.log(removeItem)
    const result = [newState, ...tasks]
    setTasks(() => {
      return result.sort((a, b) => b.isFavourite - a.isFavourite)
    })
  }

  const handleDone = (index) => {
    let newState = tasks[index]

    newState.isDone = true
    tasks.splice(index, 1)
    const result = [...tasks]
    setTasks(() => {
      return result.sort((a, b) => b.isFavourite - a.isFavourite)
    })
    setDone((state) => {
      return [...state, newState]
    })
  }

  const handleUndone = (index) => {
    let newState = done[index]
    newState.isDone = false
    done.splice(index, 1)
    const result = [...done]
    setTasks((state) => {
      return [...state, newState]
    })
    setDone(() => {
      return result.sort((a, b) => b.isFavourite - a.isFavourite)
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        done,
        handleSetTasks,
        handleFavourite,
        handleDone,
        handleUndone,
      }}>
      {children}
    </TaskContext.Provider>
  )
}
