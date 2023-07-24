
import {onIncre ,onDecre}  from './ActionsCreatorss'
import {dataLoading , dataSuccess , dataFailure}  from './ActionsCreatorss'


import axios from 'axios'

const config = {
    headers:{
     'app-id': '64b93f174da168f35e39c0c6',
    }
  };

export const handleAPICall =  (l , p) =>{
    return dispatch =>{
        dispatch(dataLoading())
        axios.get(`https://dummyapi.io/data/v1/user?page=${p}&limit=${l}` , config).then((res)=>{
            dispatch(dataSuccess(res.data))
        }).catch((err)=>{
            dispatch(dataFailure(err.response.data))
        })
    }
}

 
export const handleIncre =  (data) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(onIncre(data))
        },1000)
    }
}
export const handleDecre =  (data) =>{
    return (dispatch) =>{
        setTimeout(()=>{
            dispatch(onDecre(data))
        },1000)
    }
}



