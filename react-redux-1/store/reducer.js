import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBTRACT } from "./actionTypes";

export const reducer=(state,action)=>{
    switch(action.type){
        case INCREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }
        case DECREMENT:{
            return{
                ...state,
                count:state.count-action.payload
            }
        }
        case ADD:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }
        case MULTIPLY:{
            return{
                ...state,
                count:state.count*action.payload
            }
        }

        case SUBTRACT:{
            return{
                ...state,
                count:state.count-action.payload
            }
        }

        case DIVIDE:{
            return{
                ...state,
                count:state.count/action.payload
            }
        }
        default:{
            return state;
        }
    }      
};