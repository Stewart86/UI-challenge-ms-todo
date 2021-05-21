import React, { createContext, useEffect, useState } from "react"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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

  return (
    <TaskContext.Provider value={{ tasks, handleSetTasks, handleFavourite }}>
      {children}
    </TaskContext.Provider>
  )
}
