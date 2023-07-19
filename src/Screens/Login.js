
import { useDispatch } from "react-redux"

function Login(){

const dispatch = useDispatch()


    const handleSubmit = (e) =>{
        e.preventDefault()
        // localStorage.setItem('auth' ,  true)
        dispatch({type :  "LOGIN"})
    }

return(

    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"  onClick={(e)=>{handleSubmit(e)}} className="btn btn-primary">Submit</button>
</form>


)



}

export default Login;