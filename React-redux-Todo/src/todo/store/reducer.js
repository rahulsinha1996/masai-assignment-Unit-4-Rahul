import { ADD_TODOS, DELETE_TODO, GET_TODOS } from "./action"

const initState={
    todos:[]
}

export const reducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TODOS:{
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        case DELETE_TODO:{
            return{
                ...state,
                todos:state.todos.filter((el) => el.id !== action.payload)
            }
        }
        case GET_TODOS:{
            return{
                ...state,
                todos:action.payload
            }
        }
        default:{
            return state
        }
    }
}