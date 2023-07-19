import {Route , Routes} from 'react-router-dom'

import Home from '../Screens/Home';
import About from '../Screens/About';
import MemoDemo from '../Screens/Use-Memo';
import CallBackDemo from '../Screens/Use-Callback';
import RemoteData from '../Screens/RemoteData';
import Form from '../Screens/Form-Handling';
import ViewUser from '../Screens/View-User';
import Page10 from '../Screens/Page-10';
import Login from '../Screens/Login';
import { useSelector } from 'react-redux';





function Routing({mode}){

    var auth  =  useSelector((state) => state.AuthReducer.auth)


    return(

            <>
        {auth == true ?
        <Routes>
            <Route   path='/' element={<Home   mode={mode} />}  />
            <Route  path='/home' element={<Home/>}  />
            <Route  path='/about' element={<About/>}  />
            <Route  path='/use-memo' element={<MemoDemo />} />
            <Route  path='/use-callb' element={<CallBackDemo/>}/>
            <Route  path='/rdata' element={<RemoteData/>}/>
            <Route  path='/form' element={<Form/>}/>
            <Route  path='/p10' element={<Page10/>}/>
            <Route  path='/view-user/:id' element={<ViewUser/>}/>
            <Route  path='*' element={<Home/>}/>
            
            
            </Routes> : 
            
            <Routes>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
        </Routes>
            }


            </>
    )


}

export default Routing