// use axios for api call
import axios from "axios";
import { FAILURE, FILTER, REQUEST, SORT, SUCCESS } from "./actionTypes";

export const getRequest=()=>{
    return{
        type:REQUEST
    }
}
export const getSuccess=(payload)=>{
    return{
        type:SUCCESS,
        payload
    }
}
export const getFailure=()=>{
    return{
        type:FAILURE
    }
}

export const getFilter=(payload)=>{
    return{
        type:FILTER,
        payload
    }
}

export const getSort=(payload)=>{
    return{
        type:SORT,
        payload
    }
}

function getProductsData(payload){
    return (dispatch)=>{
        dispatch(getRequest());
        return axios.get("https://movie-fake-server.herokuapp.com/products").then((res)=>{
           dispatch(getSuccess(res.data))
        }).catch((err)=>{
            dispatch(getFailure())
        })
    }
}

const sortProducts = (payload)=>(dispatch) => {
            dispatch(getSort(payload))
};

const filterProducts = (payload)=>(dispatch) => {
    dispatch(getFilter(payload))
};

export { getProductsData, sortProducts, filterProducts };
