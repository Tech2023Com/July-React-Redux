
import React , {memo} from "react"


function Todos({todos , addTodo}){
    console.log("Running Comp.")
    return(<>
    <h1>My Todos list</h1>
    {todos.map((d, i)=>(
            <h1>{i+1} This is New Todo With Name "{d}"</h1>
        ))}

<button onClick={addTodo} >Add Todo</button>


    </>)
}


export default memo(Todos)