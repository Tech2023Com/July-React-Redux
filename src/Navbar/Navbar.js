
import  {useNavigate }  from 'react-router-dom'

import './Navbar.css'
import { useState } from 'react'
import Routing from '../Rotuing/Routes'
import { useDispatch  , useSelector} from 'react-redux'


function Navbar(){
  const dispatch = useDispatch()


    const navigate = useNavigate()
    const auth  =  useSelector((state) => state.AuthReducer.auth)
    const [mode  , setMode ] =  useState('light')


    const [color , setColor ] =  useState('white')


    const handleMode =  (e) =>{
        e.preventDefault()

            if(mode == 'light')
            {
                setMode('dark')
            }
            else{
                setMode('light')
            }
    }

    



  const handleColor  = (e) =>{
    e.preventDefault()

   var x =  Math.floor((Math.random() *  657898)).toString(16).padStart(6,0)

   document.body.style.backgroundColor = `#${x}`

  }

  const handleLogout = (e)=>{
    // e.preventDefault()
    // localStorage.setItem('auth' ,  false)
    dispatch({type :  "LOGOUT"})

  }



  return(
    <>
  {auth  == true ? 
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className={`nav-item ${window.location.href.includes('/home') ? 'active' : ""} `}>
        <a className="nav-link"  onClick={()=>navigate('/home')}  >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/about') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/about')}>About</a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/use-memo') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/use-memo')}>Memo-Demo</a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/use-callb') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/use-callb')}>Callback-Demo</a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/rdata') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/rdata')}>Remote Data</a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/form') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/form')}>Form</a>
      </li>
      <li className={`nav-item ${window.location.href.includes('/p10') ? 'active' : ""} `}>
        <a className="nav-link" onClick={()=>navigate('/p10')}>Page-10</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button onClick={(e)=>{handleLogout(e)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">

        Logout

      </button>
    </form>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={(e)=>{handleMode(e)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">

        {mode  == 'light' ?  "Dark" :  "Light"}

      </button>
    </form>
    <form className="form-inline my-2 my-lg-0">
      <button onClick={(e)=>{handleColor(e)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">

        Change Color

      </button>
    </form>
  </div>
</nav>
: <></> }
    <Routing  mode={mode} />
</>
  )  

}

export default Navbar;