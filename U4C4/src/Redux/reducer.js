import { FAILURE, REQUEST, SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case REQUEST:{
      return{
        ...state,
        isLoading:true,
        products:[],
        isError:false,

      }
    }
    case SUCCESS:{
      return{
        ...state,
        isLoading:false,
        data:payload,
        isError:false,
      }
    }
    case FAILURE:{
      return{
        ...state,
        isLoading:false,
        data:[],
        isError:true,
      }
    }
    default:{
      return state;
    }
  }
};
export { reducer };
