import { FAILURE, FILTER, REQUEST, SORT, SUCCESS } from "./actionTypes";

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
        products:state.data,
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
    case FILTER:{
        return{
          ...state,
        isLoading:false,
        filterData:state.data.filter(elem=>elem.category===payload.category),
        isError:false,
        }
    }
    case SORT:{
      console.log(payload)
      return{
        ...state,
      isLoading:false,
      products:state.data,
      data:payload,
      isError:false,
      }
    }
    default:{
      return state;
    }
  }
};
export { reducer };
