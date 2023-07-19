import { useEffect } from "react"




const Page  = ({title}) =>{


useEffect(()=>{
    document.title = title || "" 
},[title])    


}

export default Page