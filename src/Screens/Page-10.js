import { useState } from "react"
import {useDispatch , useSelector} from 'react-redux'



function Page10(){
    const dispatch = useDispatch()

    // var [count , setCount ] =  useState(
    //     parseInt(localStorage.getItem('count')) 
    //     )



    var count  = useSelector((state) => state.Count.count == 'undefined' ? 0 :state.Count.count )




    // const handleClick = () =>{
    //     localStorage.setItem('count'  , count +1)
    //     window.location.reload()
    // }

    const handleClick = () =>{
       dispatch({count :count +  1 , type : "COUNT_UP" })
    }


    return(

       <>
        <h1>Value of Count is  : {count}</h1>
        <button  onClick={handleClick} >Incre</button>
       </>  
    )



}


export default Page10