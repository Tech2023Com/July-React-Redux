import {useState, useEffect} from 'react'


function About(){


    const [todos , setTodos]  = useState([])
    const [inputValue  , setInputValue] = useState('')
    const [isEdit ,  setIsEdit] = useState(false)  
    const [tempIndex ,  setTempIndex] = useState(null)  
    const [msg ,  setMsg] = useState('Hello');
    const [isDisplay  , setIsDisplay] =  useState(false)  


    const addToDo =  () =>{
        setTodos([...todos , inputValue])

        setInputValue('')

        setIsDisplay(true)
        setMsg("Added Successfully")
        setTimeout(()=>{
            setIsDisplay(false)
        },1000)
    }

    const  handleInput = (e) =>{

        setInputValue(e.target.value)

    }

    const onEdit= (el , i) =>{

        setIsEdit(true)
        setTempIndex(i)

        setInputValue(el)

        

    }

    const onUpdate = () =>{

        let temp  =  todos;
        todos[tempIndex] =  inputValue;
        setTodos([...temp])
        setInputValue('')
        setIsEdit(false)
        setTempIndex(null)
        setIsDisplay(true)
        setMsg("Updated Successfully")
        setTimeout(()=>{
            setIsDisplay(false)
        },1000)


    }

    const onDelete = (index)=>{

        let temp  =  todos;
        todos.splice(index ,  1)
        setTodos([...temp])
        setIsDisplay(true)
        setMsg("Deleted Successfully")
        setTimeout(()=>{
            setIsDisplay(false)
        },1000)


    }

    



    return(
        <>

        <div  style={{height:40 , visibility: isDisplay ? "visible" : "hidden", width:"50%" ,  margin:"auto" ,  backgroundColor : "#66ff66" , color:'black' , display : "flex" , textAlign:"center" , fontWeight : "bold" , alignItems :"center" ,  justifyContent:"center"}} >{msg}</div>

        <div style={{display :  'flex' ,  flexDirection :'row' ,  justifyContent  : 'center' ,  width:'80%' ,margin:'auto'}} >

           <input value={inputValue} onChange={handleInput} placeholder='Enter Todo' style={{marginRight: 10}}  /> 
           <button onClick={ isEdit ? onUpdate : addToDo} >{isEdit ? 'Update' : "Add"  }</button>

          
           

        </div>
        <div style={{width : "80%" ,  margin:'auto'}}>

        <table  style={{marginTop:100}}  >
                    <tr>
                        <th>SR#</th>
                        <th>Todo</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {todos.map((el,i)=>(
                        <tr  key={i} >
                            <td>{i+1}</td>
                            <td>{el}</td>
                            <td><button onClick={()=>{onEdit(el , i)}} >Edit</button></td>
                            <td><button  onClick={()=>{onDelete(i)}} >Delete</button></td>
                        </tr>
              ))}
                </table>
        </div>
        </>
        
    )



}

export default About