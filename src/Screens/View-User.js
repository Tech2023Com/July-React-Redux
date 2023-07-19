
import {useLocation} from 'react-router-dom'

function ViewUser(){


const {state} = useLocation()

console.log(state)




return(
    <>
    <h1> User ID  :  {state.userId}</h1>
    <h1> ID  :  {state.id}</h1>
    <h1>Title  :  {state.title}</h1>
    <h1>Status   :  {state.completed == true ?  "Done" : "Not Done"}</h1>
    </>
)    



}

export default ViewUser