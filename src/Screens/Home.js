import { useEffect, useState } from "react"
import About from "./About"

import {useSelector} from 'react-redux'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { handleDecre ,  handleIncre  , handleAPICall } from "../Actions/Actions"


function Home({mode}){

    const dispatch = useDispatch()

    const loading  = useSelector((state) => state.ApiCall.loading)
    const data  = useSelector((state) => state.ApiCall.data && state.ApiCall.data.data &&  Array.isArray(state.ApiCall.data.data) && state.ApiCall.data.data.length >  0 ? state.ApiCall.data.data  :[]  )
    console.log(data)
    const error  = useSelector((state) => state.ApiCall.error)






useEffect(()=>{

    dispatch(handleAPICall())
    
},[])







return(
    <>

    {loading == true ? 
    <h1>Please Wait Data is loading</h1>
    : 
    <>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">SR#</th>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>

  {data.map((d , i)=>(

<tr>
<th scope="row">{i+1}</th>
<td>{d.id}</td>
<td>{d.firstName}</td>
<td>{d.lastName}</td>
<td><img src={d.picture} style={{width:100 , height:100}} /></td>
</tr>
        
        ))}
   
   
  </tbody>
</table>
    
    </>
}
    
    </>

)




}

export default Home




