import { useEffect, useState } from "react"
import About from "./About"

import {useSelector} from 'react-redux'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { handleDecre ,  handleIncre  , handleAPICall } from "../Actions/Actions"

import './Home.css'


function Home({mode}){

    const dispatch = useDispatch()


    var [limit , setLimit] =  useState(99)
    var [page , setPage] =  useState(0)

    const loading  = useSelector((state) => state.ApiCall.loading)
    const data  = useSelector((state) => state.ApiCall.data && state.ApiCall.data.data &&  Array.isArray(state.ApiCall.data.data) && state.ApiCall.data.data.length >  0 ? state.ApiCall.data.data  :[]  )
    console.log(data)
    const error  = useSelector((state) => state.ApiCall.error)

    const d_limit =  0;
    const total_data  =  useSelector((state)=> state.ApiCall.data && state.ApiCall.data.total ? state.ApiCall.data.total  :0 );
    const d_page = useSelector((state)=> state.ApiCall.data && state.ApiCall.data.page ? state.ApiCall.data.page  :0 );






useEffect(()=>{

    dispatch(handleAPICall(limit ,  page))
    
},[page])



const handleNext=()=>{

  setPage(page +1)

}

const handlePre=()=>{

  setPage(page -1)
}



return(
    <>
  <div className="container" >

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
<td><img src={d.picture} style={{width:50 , height:50}} /></td>
</tr>
        
        ))}

        <tr  >
        
          <td colSpan={4}>
          <div class="container">
  <div class="row">
    <div class="col-sm">
      <button onClick={handlePre} className="bt-1" > Prev </button>
    </div>
    <div class="col-sm">
       <span style={{color:"blue"}} >Data  {page * 5}  of  {total_data}</span> 
    </div>
    <div class="col-sm">
    <button className="bt-1" onClick={handleNext} > Next </button>
    </div>
    <div  style={{color:"blue"}} class="col-sm">
      Page : {d_page}
    </div>
  </div>
</div>
          </td>
        </tr>
   
   
  </tbody>
</table>
    
    </>
}
    
        </div>
    </>

)




}

export default Home




