import { useState } from "react"

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
                <div>
                    <input type="text" value={name} onChange={nameValue} placeholder={placeholder.placeholder1}/> <br/>
                    <input type="text" value={otherNames} onChange={otherNamesValue} placeholder={placeholder.placeholder2}/> <br/>
                    <button onClick={increment}>Next</button>
                </div>:
                count==1?
                <div>
                    <input type="email" value={email} onChange={emailValue} placeholder={placeholder.placeholder3}/> <br/>
                    <input type="tel" value={phone} onChange={phoneValue}placeholder={placeholder.placeholder4}/> <br/>
                    <button onClick={decrement}>Prev</button>
                    <button onClick={increment}>Next</button>
                </div>:
                count==2?
                <div>
                    <input type="password" value={password} onChange={passwordValue} placeholder={placeholder.placeholder5}/> <br/>
                    <button onClick={decrement}>Prev</button>
                    <button onClick={submit}>Submit</button>
                </div>:
                "Sorry , that's all"
            }
        </>
     )
}
export default Assignment