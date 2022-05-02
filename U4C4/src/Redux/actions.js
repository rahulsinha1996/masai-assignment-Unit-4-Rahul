// use axios for api call
import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "./actionTypes";

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

function getProductsData(payload){
    return (dispatch)=>{
        dispatch(getRequest());
        return axios.get("https://movie-fake-server.herokuapp.com/products").then((res)=>{
           dispatch(getSuccess(res.data))
           console.log(res.data)
        }).catch((err)=>{
            dispatch(getFailure())
        })
    }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
