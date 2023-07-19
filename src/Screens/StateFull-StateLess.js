import { useState } from "react"



function StateFull(){

    var [data , setData ] =  useState([
        {name :"Bhanu" , email : "bhanu@gmail.com"},
        {name :"Rahul" , email : "rahul@gmail.com"},
        {name :"Monu" , email : "monu@gmail.com"},
])
 
  return(<>
  <StateLess list={data}  />
  </>)  


}



function StateLess({list}){
    return(<>
    {list.map((d,i)=>(
    <h1>My name is {d.name} & email is {d.email}</h1>

    ))}
    </>)
}

export default StateFull

