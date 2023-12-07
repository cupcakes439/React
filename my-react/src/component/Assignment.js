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
        <section>
            
            {
                count==0?
                <div className="div1">
                    <input type="text" value={name} onChange={nameValue} placeholder={placeholder.placeholder1}/> 
                    <input type="text" value={otherNames} onChange={otherNamesValue} placeholder={placeholder.placeholder2}/> 
                    <button onClick={increment}>NEXT</button>
                </div>:
                count==1?
                <div className="div2">
                    <input type="email" value={email} onChange={emailValue} placeholder={placeholder.placeholder3}/>
                    <input type="tel" value={phone} onChange={phoneValue}placeholder={placeholder.placeholder4}/>
                    <div className="div3">
                        <button onClick={decrement}>PREV</button>
                        <button onClick={increment}>NEXT</button>
                    </div>
                </div>:
                count==2?
                <div className="div4">
                    <input type="password" value={password} onChange={passwordValue} placeholder={placeholder.placeholder5}/>
                    <div className="div5">
                        <button onClick={decrement}>PREV</button>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                </div>:
                "Sorry , that's all"
            }
        </section>
     )
}
export default Assignment