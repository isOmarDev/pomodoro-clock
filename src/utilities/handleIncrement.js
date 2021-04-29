function handleIncrement(e, isOn, setBreakLength, setWorkLength) {
  const incrementType = e.target.getAttribute("data-increment")
  if(isOn===false) {
    incrementType==="break-increment" ? 
                    setBreakLength(prevBreakLength => prevBreakLength<60 ? prevBreakLength + 1 : prevBreakLength) : 
                    setWorkLength(prevWorkLength => prevWorkLength<60 ? prevWorkLength + 1 : prevWorkLength) 
  }
}

export default handleIncrement