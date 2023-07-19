


const CountReducer  = (state ,  action)=>{
    if(typeof state == 'undefined')
    {
        return {
            count :  0
        }
    }

    switch(action.type){

        case 'INCRE':
            return {
                ...state ,
                count  : action.data

            }

        case 'DECRE':
            return {
                ...state ,
                count  : action.data

            }
        default:
            return{
                ...state

            }


        }

    }

 

    export default CountReducer