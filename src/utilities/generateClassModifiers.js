function generateClassModifiers(isColorFliped, isWorkFinished, green, red){
  return isColorFliped===true && isWorkFinished===false ? green
        : isColorFliped===false && isWorkFinished===false ? red
        : isColorFliped===true && isWorkFinished===true ? red
        : isColorFliped===false && isWorkFinished===true ? green
        : null
}  

export default generateClassModifiers