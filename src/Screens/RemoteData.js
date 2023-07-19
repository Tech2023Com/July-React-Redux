
import {useEffect, useState} from 'react'

import {useNavigate } from 'react-router-dom'

import './Table.css'

import Page from './PageTitle'



function RemoteData (){


  const navigate  =  useNavigate()

    var [count , setCount  ] =  useState(0)


    var [arr  , setArr] = useState([])


useEffect(()=>{

  // document.title  = "Remote Data"
  
    // 'http://localhost:8765/user/getAllUSers'

  fetch('https://jsonplaceholder.typicode.com/todos').then((res)=> res.json()).then((data)=>{
    setArr([...arr , ...data])
  })  


  
},[count])  



const onEdit = (data) =>{

  console.log(data)

  navigate(`/view-user/${data.id}` ,{state :data})

}




  return(
    <>
    <Page title="Remote Data"  />
    <h1>This is Remote Data  : {count} </h1>

        <table>
            <tr>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {arr.map((d, i)=>(
            <tr>
                <td>{i+1}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.completed == true ?  "Completed" : "Not Completed" }</td>
                <td><button onClick={()=>{onEdit(d)}} >Edit</button></td>
            </tr>

))}
        </table>



   
        


       


    <button onClick={()=>{setCount(count+1)}} >Increment</button>
    </>
  )  

}

export default RemoteData