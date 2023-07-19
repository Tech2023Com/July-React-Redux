

const AuthReducer =  (state, action) =>{

    if(state == 'undefined')
    {
        return{
            auth    :  false
        }
    }


    switch(action.type)
    {

        case "LOGIN":
            return{
                ...state ,
                auth : true
            }
        case "LOGOUT":
            return{
                ...state ,
                auth : false
            }
        default:
            return{
                ...state 
            }

    }

}

export default AuthReducer