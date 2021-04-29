function handleDecrement(e, isOn, setBreakLength, setWorkLength) {
  const decrementType = e.target.getAttribute("data-decrement")
  if(isOn===false) {
    decrementType==="break-decrement" ? setBreakLength(prevBreakLength => prevBreakLength>1 ? prevBreakLength - 1 : prevBreakLength) 
                    : setWorkLength(prevWorkLength => prevWorkLength>1 ? prevWorkLength - 1 
                    : prevWorkLength)  
  }
}

export default handleDecrement