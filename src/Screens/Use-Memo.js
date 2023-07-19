import { useState , useMemo } from "react"




const heavCalculation = (num) =>{

    console.log("Calculating Please Wait ~~")
    for(let i = 0  ; i< 1000000000 ; i++)
    {
        num += 1
    }

    return num

}


function MemoDemo(){

    var [count, setCount] =  useState(0)
    var [todos , setTodos ] =  useState([])


    // const c_value =  heavCalculation(count)

    const c_value =  useMemo(()=> heavCalculation(count) , [count] )


const incre =  ()  =>{
    setCount(count +1)
}
const addTodo = ()=>{
    setTodos([...todos ,  "New Todo"])
}


return(
    <>
        {todos.map((d, i)=>(
            <h1>{i+1} This is New Todo With Name "{d}"</h1>
        ))}

        <button onClick={addTodo} >Add Todo</button>


        <h1>Value of Count is : {count}</h1>
            <button onClick={incre}>Increment</button>

            <h1>Calculated Value is : {c_value}</h1>

    </>
)


}


export default MemoDemo

