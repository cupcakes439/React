import { useState } from "react"
import "../css/Assignment.css"
import eyeOpened from "../images/eye-opened.png"
import eyeClosed from "../images/eyes-closed.png"

const Assignment = ({ placeholder })=> {
     const [name , setName] = useState("")
     const [otherNames , setOtherNames] = useState("")
     const [email, setEmail] = useState("")
     const [phone , setPhone] = useState("")
     const [password , setPassword] = useState("")
     const [count , setCount] = useState(0)
     const reset = ()=> setCount(count>0? 0: count)
     const increment = ()=> setCount(count>=2? count : count+1)
     const decrement = ()=> setCount(count<=0? count: count-1)
     const nameValue = (e)=> setName(e.target.value)
     const otherNamesValue = (e)=> setOtherNames(e.target.value)
     const emailValue = (e)=> setEmail(e.target.value)
     const phoneValue = (e)=> setPhone(e.target.value)
     const passwordValue = (e)=> setPassword(e.target.value)
     const [eyeOpen , setEyeOpen] = useState(false)
     const handleEye = ()=> setEyeOpen(!eyeOpen)

    const submit = (e)=> {
        e.preventDefault()
        alert("Thanks for fill the form")
        setName("")
        setOtherNames("")
        setEmail("")
        setPhone("")
        setPassword("")
        reset()
    } 

     return (
        <>
            
            {
                count==0?
                <div className="div1">
                    <input type="text" value={name} onChange={nameValue} placeholder={placeholder.placeholder1}/> 
                    <input type="text" value={otherNames} onChange={otherNamesValue} placeholder={placeholder.placeholder2}/> 
                    <button className="btn" onClick={increment}>NEXT</button>
                </div>:
                count==1?
                <div className="div1">
                    <input type="email" value={email} onChange={emailValue} placeholder={placeholder.placeholder3}/>
                    <input type="tel" value={phone} onChange={phoneValue}placeholder={placeholder.placeholder4}/>
                    <div className="div2">
                        <button onClick={decrement}>PREV</button>
                        <button onClick={increment}>NEXT</button>
                    </div>
                </div>:
                count==2?
                <div className="div1">
                    <input type={eyeOpen? "text" : "password"} value={password} onChange={passwordValue} placeholder={placeholder.placeholder5}/>
                    <span onClick={handleEye}>
                        {
                          eyeOpen? <img src={eyeOpened} width={"25px"} height={"25px"}/> : <img src={eyeClosed} width={"30px"} height={"30px"}/>
                        }
                    </span>
                    <div className="div2">
                        <button onClick={decrement}>PREV</button>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                </div>:
                "Sorry , that's all"
            }
        </>
     )
}
export default Assignment