import { useState } from "react"
import Arrowup from "../images/up-arrow.png"
import Arrowdown from "../images/down-arrow.png"
import Name from "./Name"
import State from "./State"
import { placeholder } from './data';
import Select from "./Select"

const Dropdown = ({ colors })=> {
    const [isArrowUp , setArrowUp] = useState(true)

    const handlearrow = ()=> setArrowUp(!isArrowUp)
    const [color , setColor] = useState(colors.color1)
    // const handleColor = (colour)=>{
    //     setColor(colour)

    // } 
    const handleColor1 = ()=> {setColor(colors.color2)}
    const handleColor2 = ()=> setColor(colors.color3)
    const handleColor3 = ()=> setColor(colors.color4)
    const handleColor4 = ()=> setColor(colors.color5)
    const handleColor5 = ()=> setColor(colors.color6)

    return (
        <div style={{backgroundColor: color}}>
          <div onClick={handlearrow} style={{width: "50%", margin: "50px"}}>
             {isArrowUp? <span>Items<img src={Arrowup} width={"25px"} height={"25px"}/></span> :
             <div>
                <span>Items</span><img src={Arrowdown} width={"20px"} height={"20px"}/>
                <div onClick={handleColor1}>Item 1</div>
                <div onClick={handleColor2}>Item 2</div>
                <div onClick={handleColor3}>Item 3</div>
                <div onClick={handleColor4}>Item 4</div>
                <div onClick={handleColor5}>Item 5</div>
            </div>}
          </div>
          <Name user={placeholder}/>
          <State />
          <Select />
          </div>
    )
}
export default Dropdown