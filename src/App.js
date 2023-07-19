import { useEffect, useState } from "react";
import Home from "./Screens/Home";

import PropsDrilling from './Screens/Props-Drilling'

import StateFull from "./Screens/StateFull-StateLess";
import MemoDemo from "./Screens/Use-Memo";

import CallBackDemo from "./Screens/Use-Callback";

import Navbar from "./Navbar/Navbar";
import Routes from "./Rotuing/Routes";

import {Provider} from 'react-redux'
import store from "./Store/Store";




function App(){


   

    var [value , setValue] = useState("")



 function handleInput(e){
    console.log(e.target.value)

    setValue(e.target.value)
 }  
 
 
 store.subscribe(()=>{
    localStorage.setItem('reduxStore' ,  JSON.stringify(store.getState()))
 })


return(
    <>
    <Provider  store={store} >

    <Navbar/>
    </Provider>

  
    </>
)



}

export default App;