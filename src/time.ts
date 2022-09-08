const convertTime = (time: number): string => {
  let totalSeconds = time
  totalSeconds %= 3600
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  // console.log('hours: ' + hours)
  // console.log('minutes: ' + minutes)
  // console.log('seconds: ' + seconds)

  // If you want strings with leading zeroes:
  const minutesS = String(minutes).padStart(2, '0')
  const secondsS = String(seconds).padStart(2, '0')
  // console.log(hoursS + ':' + minutesS + ':' + secondsS)
  return minutesS + ':' + secondsS
}

export default convertTime
