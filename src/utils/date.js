export const todayDate = () => {
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const date = new Date()
  return `${WEEKDAY[date.getDay()]}, ${date.getDate()}, ${
    MONTH[date.getMonth()]
  }`
}