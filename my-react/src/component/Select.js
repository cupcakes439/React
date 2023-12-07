import { useState } from "react"

const Select = ()=> {
    const [color , setColor] = useState("pink")
 
    const color1 = (e)=> setColor(e.target.value)
    // const color2 = ()=> setColor("yellow")
    // const color3 = ()=> setColor("red")
    // const color4 = ()=> setColor("orange")
    const style = {
        width: "30%",
        height: "30vh",
        backgroundColor: color
    }
    return (
         <>
            <select onClick={color1}>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
            </select>
            <div style={style}></div>
         </>
    )
}

export default Select