import { useState  ,   createContext  ,  useContext} from "react"


const CountContext  = createContext()

function A(){

    var [count , setCount]  = useState(0)
    
    return(<>
    <CountContext.Provider  value={count} >

    <h1>Value of Count is : ${count}</h1>
    <button  onClick={()=>{setCount(count+1)}} >Click Me</button>
    <h1>This is Component A </h1>
    <B />
    </CountContext.Provider>

    </>)
}


function B(){
    return(<>
    <h1>This is Component B </h1>
    <C  />
    </>)
}

function C(){
    const count = useContext(CountContext)
    return(<>
    <h1>Now Value oc Count is : {count}</h1>
    <h1>This is Component C </h1>
    <D  />
    </>)
}

function D(){
    return(<>
    <h1>This is Component D </h1>
        <E  />
    </>)
}

function E(){
    const count = useContext(CountContext)
    return(<>
    <h1>Double value is : ${count * 2}</h1>
    <h1>This is Component E </h1>
    </>)
}

export default A

