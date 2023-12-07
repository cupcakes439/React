import { useState } from "react"
import eyeOpened from "../images/eye-opened.png"
import eyeClosed from "../images/eyes-closed.png"

const Name = ({user})=> {
     const [name , setName] = useState("")
     const [age , setAge] = useState("")
     const [gender, setGender] = useState("")
     const [password , setPassword] = useState("")
     const [eyeOpen , setEyeOpen] = useState(false)
     const handleEye = ()=> setEyeOpen(!eyeOpen)

    const nameValue = (e)=> setName(e.target.value)
    const ageValue = (e)=> setAge(e.target.value)
    const genderValue = (e)=> setGender(e.target.value)
    const passwordValue = (e)=> setPassword(e.target.value)
     
    const submit = (e)=> {
        e.preventDefault()
        alert("Thanks")
        setName("")
        setAge("")
        setGender("")
        setPassword("")
    }

    const style = {
        
    }

     return (
        <div>
            <input type="text" value={name} onChange={nameValue} placeholder={user.placeholder1}/> <br/>
            <input type="text" value={age} onChange={ageValue} placeholder={user.placeholder2}/> <br/>
            <input type="text" value={gender} onChange={genderValue} placeholder={user.placeholder3}/> <br/>
            <input type={eyeOpen? "text": "password"} value={password} onChange={passwordValue} placeholder={user.placeholder4}/>
          <span onClick={handleEye}> 
            {
                eyeOpen? <img src={eyeOpened} width={"20px"} height={"20px"}/>: <img src={eyeClosed} width={"30px"} height={"30px"}/>
            }
          </span>
            <button onClick={submit}>Click me</button>
        </div>
     )
}
export default Name