import { useState } from "react"

const State = ()=> {
    const [count , setCount] = useState(0)

    const reset = ()=> setCount(count>0? 0: count)
    const increment = ()=> setCount(count>=10? count : count+1)
    const decrement = ()=> setCount(count<=0? count: count-1)
    // const decrement = ()=> {
    //         if (count<=0) {
    //            return setCount(count)
    //         }
    //         setCount(count-1)
    // }
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        height: "100vh",
        width: "100vw",
    }
    return (
        <div style={style}>
          <button onClick={increment}>+</button>
          <h1>{count}</h1>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Set</button>
        </div>
    )
}

export default State