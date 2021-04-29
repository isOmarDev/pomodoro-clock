function numberToString(sessionLength) {
  const numToString = sessionLength.toString()
  return sessionLength<10 ? "0" + numToString : numToString
}

export default numberToString