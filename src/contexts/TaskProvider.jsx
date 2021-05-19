import React, { createContext, useEffect, useState } from "react"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  }, [tasks])

  const handleSetTasks = (task) => {
    setTasks((state) => [...state, task])
  }
  return (
    <TaskContext.Provider value={{ tasks, handleSetTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
