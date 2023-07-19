import { useState } from "react"

import {toast ,  ToastContainer} from 'react-toastify'
import { useSelector, UseSelector } from "react-redux"

import Page from "./PageTitle"



function Form(){

    var count = useSelector((state) => state.CountReducer.count)

    const [data , setData ] =  useState([])

    const [values ,setValues ]  = useState({
        name  :  "",
        mobile :"",
        email : "",
        password : "",
        course  :"" ,
        image : "" , 
        tem_img  : ''
    })


const handleInput  = (e) =>{

    // console.log(e.target.name ,  e.target.value)

    setValues({...values ,  [e.target.name]  :e.target.value})



}    


const handleDropDown = (e)=>{
    console.log(e.target.value)

    setValues({...values , ['course'] : e.target.value})

}


const handleClick  =  () =>{
    var mob_reg = /^[6-9]\d{9}$/
    var em_reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(values.name == "" || values.name == undefined)
    {
        // alert("Please Enter Your Name !!")
        toast.info("Please Enter Your Name !!")
    }
    else if( ! mob_reg.test(values.mobile)){
        alert("Please Enter a Valid Mobile Number !!")
    }
    else if( ! em_reg.test(values.email)){
        alert("Please Enter a Valid Email  !!")
    }
    else{
        console.log(values)
        setData([...data  ,  values])
    
    }
    


   


}

const handleFilePicker  = (e) =>{
    console.log(e.target.files)

    setValues({...values , ['image']  : e.target.files[0]  , ['tem_img']  : URL.createObjectURL(e.target.files[0]) })





}

const onDelete = (i)=>{
let temp =  data;
temp.splice(i ,1)
setData([...temp])

}




return(

    <>

    <Page  title="Form Handling" />

    <h1> Value of Count is  : {count}</h1>

    <ToastContainer/>

    <input  name="name" onChange={handleInput}   placeholder="Enter Your Name" />
    <br></br>
    <input name="mobile"  onChange={handleInput}  placeholder="Enter Your Mobile" />
    <br></br>
    <input  name="email" onChange={handleInput} placeholder="Enter Your Email" />
    <br></br>
    <input name="password" onChange={handleInput}  placeholder="Enter Your Password" />
    <br></br>
    <select  onChange={handleDropDown} >
        <option value={null} >Select One</option>
        <option value="c++" >C++</option>
        <option  value="java" >Java</option>
        <option  value='python' >Python</option>
        <option value='js' >JS</option>
    </select>
    <br></br>
    <input  onChange={handleFilePicker} type="file" placeholder="Select Any File" />
    <br></br>
    <img  src={values.tem_img}   style={{width:100 , height:100}} />
    <button  onClick={handleClick} >Submit</button>


    <table>
        <tr>
            <th>SR. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>Image</th>
        </tr>
        {data.map((d,i)=>(

                <tr>
                    <td>{i+1}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.mobile}</td>
                    <td>{d.course}</td>
                    <td><img src={d.tem_img} style={{width :100 , height:100}}  /></td>
                    <td><button  onClick={()=>{onDelete(i)}} >Delete</button></td>
                </tr>

        ))}
    </table>

    </>


    

)



}

export default Form
