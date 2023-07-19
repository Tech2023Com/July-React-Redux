import { useEffect, useState } from "react"
import About from "./About"

import {useSelector} from 'react-redux'
import axios from "axios"
import {useDispatch} from 'react-redux'


function Home({mode}){

    const dispatch = useDispatch()

    // var [count , setCount ] =  useState(localStorage.getItem('count'))

    var count = useSelector((state) => state.CountReducer.count)





useEffect(()=>{
    if(! localStorage.getItem('count')  )
    {
        localStorage.setItem('count' , 0)
    }
})


const handleIncre =() =>{

    dispatch({type  :  "INCRE" ,  data   : count +1})

    // localStorage.setItem('count' ,  Number(count)  +1)
    // window.location.reload()
    
}

const handleDecre = () =>{
    dispatch({type  :  "DECRE" ,  data   : count -1})

    // localStorage.setItem('count' ,  Number(count)  -1)
    // window.location.reload()

}


return(
    <>

    <h1>This is the Value of Count   : {count}</h1>
    <button onClick={handleIncre}  >Incre</button>
    <button onClick={handleDecre} >Decre</button>
    </>

)




}

export default Home




