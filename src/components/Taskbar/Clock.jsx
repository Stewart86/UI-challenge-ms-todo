import { useEffect, useState } from "react"

const updateClock = () => {
  const date = new Date()
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  const minutes = date.getMinutes()
  const isPM = date.getHours() > 12
  return `${hours}:${minutes} ${isPM ? "PM" : "AM"}`
}

export const Clock = () => {
  const [clock, setClock] = useState(updateClock())

  useEffect(() => {
    let mounted = true
    const update = () => {
      if (mounted) {
        setInterval(() => {
          setClock(updateClock())
        }, 10000)
      }
    }
    update()
    return () => {
      mounted = false
    }
  }, [clock])

  return (
    <div className='flex justify-center items-center mx-2  h-8 text-white text-xs'>
      {clock}
    </div>
  )
}
