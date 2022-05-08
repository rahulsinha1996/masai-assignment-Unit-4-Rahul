import axios from "axios";

export const ADD_TODOS="ADD_TODOS";
export const DELETE_TODO="DELETE_TODO";
export const GET_TODOS="GET_TODOS";


export const addTodoRequest=(payload)=>{
    return {
        type:ADD_TODOS,
        payload
    }
    
};

export const deleteRequest=(id)=>{
    return {
    type:DELETE_TODO,
    payload:id
    }
}

export const getTodoRequest=(payload)=>{
    return {
    type:GET_TODOS,
    payload
    }
}



export const addTodo=({title,desc})=>(dispatch)=>{
    return axios.post("http://localhost:8080/todos",{
        title,
        desc
    }).then((res)=>{
        dispatch(addTodoRequest(res.data))
    })
}

export const getTodo=(payload)=>(dispatch)=>{
    return axios.get("http://localhost:8080/todos").then((res)=>{
        dispatch(getTodoRequest(res.data))
    }).catch((err)=>{
            console.log(err)
    })
}

export const deleteTodo=(id)=>(dispatch)=>{
    console.log(id)
    return axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
       dispatch(deleteRequest(id))
    })
}