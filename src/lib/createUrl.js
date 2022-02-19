export const createUrl = (month, date) => {
  let tempMonth = 0
  let tempDate = 0
  if (month < 10) {
    tempMonth = `0${month}`
  } else {
    tempMonth = `${month}`
  }
  if (date < 10) {
    tempDate = `0${date}`
  } else {
    tempDate = `${date}`
  }
  return tempMonth+tempDate
}
