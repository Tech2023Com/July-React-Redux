import {INCRE ,  DECRE} from './Types'
import {DATA_LOADING  ,DATA_SUCCESS  ,DATA_FAILURE} from './Types'


export const onIncre = (data) => ({
    type :  INCRE,
    data
})

export const onDecre  =  (data) => ({
    type   : DECRE,
    data

})


export const dataLoading = () =>({
type  : DATA_LOADING    
})
export const dataSuccess = (data) =>({
type  : DATA_SUCCESS,
data
})
export const dataFailure = (err) =>({
type  : DATA_FAILURE,
err
})