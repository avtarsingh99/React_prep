import React, { useEffect, useState } from 'react'

function RandomColor() {

    const [color, setColor] = useState("#000000")
    const [typeOfColor, setTypeOfColor] = useState('hex')

    useEffect(()=>{
        typeOfColor ==='rgb'? handleRandomRGBColor() : handleRandomHEXColor()
    },[typeOfColor])

    function utility(len){
       return Math.floor(Math.random()*len);
    }

    function handleRandomHEXColor(){
        const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        let hexColor = "#";
        for(let i = 0; i<6; i++){
            hexColor += hex[utility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor);
    }
    function handleRandomRGBColor(){
        let r = utility(256)
        let g = utility(256)
        let b = utility(256)
        console.log(`rgb${r},${g},${b}`)
        setColor(`rgb(${r},${g},${b})`);
    }
  return (
    <div style={{
        height : "100vh",
        width : "100vw",
        background :  color,
    }}>
    <button onClick={()=>setTypeOfColor('hex')}>HEX Color</button>
    <button onClick={()=>setTypeOfColor('rgb')}>RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleRandomHEXColor : handleRandomRGBColor}>Generate Random Color</button>
      <h3>{typeOfColor === 'rgb'? "RGB Color Code" : "HEX Color Code"}</h3>
      <h1>{color}</h1>
    </div>
  )
}

export default RandomColor
