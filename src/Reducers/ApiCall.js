import { DATA_LOADING , DATA_SUCCESS, DATA_FAILURE } from "../Actions/Types"

const ApiCall =  (state, action) =>{

    if(state == 'undefined')
    {
        return{
            loading :  false,
            data   : [] , 
            error :{}
        }
    }


    switch(action.type)
    {

        case DATA_LOADING:
            return{
                ...state ,
               loading : true,
               data   : [],
               error : {}
            }
        case DATA_SUCCESS:
            return{
                ...state ,
                loading  : false,
                data   : action.data,
                error : {}
            }
        case DATA_FAILURE:
            return{
                ...state ,
                loading  : false,
                data   :[],
                error : action.err
            }
        default:
            return{
                ...state,

            }

    }

}

export default ApiCall