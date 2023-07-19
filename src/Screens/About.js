import {useState, useEffect} from 'react'


function About(){

    


    // var count = 0
    var [count , setCount ] =  useState(0)
    var [msg , setMsg ] =  useState("")


    function incre(){
        // count++
        setCount(count + 1)
        console.log(count)
    }

    useEffect(()=>{

        console.log("hello")

        if(count == 20)
        {
            setMsg("You have reached to Maximum limit")
        }



    },[])

    return(
        <>
            <h1>Value of Count is : {count}   </h1>
            <button onClick={incre}  >Click Me</button>
            <h1>{msg}</h1>
        </>
        
    )



}

export default About