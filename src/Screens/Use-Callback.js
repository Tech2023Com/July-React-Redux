import { useState , useMemo, useCallback } from "react"

import Todos from "./Todos"




function CallBackDemo(){

    var [count, setCount] =  useState(0)
    var [todos , setTodos ] =  useState([])




const incre =  ()  =>{
    setCount(count +1)
}
// const addTodo = ()=>{
//     setTodos([...todos ,  "New Todo"])
// }


const addTodo =  useCallback(()=>{
    setTodos([...todos ,  "New todo"])
},[todos])


return(
    <>
        
    <Todos todos={todos} addTodo={addTodo} />


        <h1>Value of Count is : {count}</h1>
            <button onClick={incre}>Increment</button>


    </>
)


}






export default CallBackDemo

