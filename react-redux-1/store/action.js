import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBTRACT } from "./actionTypes";

export const incremetnCounter=(payload)=>({
    type:INCREMENT,
    payload,
});

export const decremetnCounter=(payload)=>({
    type:DECREMENT,
    payload,
});
export const add=(payload)=>({
    type:ADD,
    payload,
});
export const multiply=(payload)=>({
    type:MULTIPLY,
    payload,
});

export const subtract=(payload)=>({
    type:SUBTRACT,
    payload,
});

export const divide=(payload)=>({
    type:DIVIDE,
    payload,
});
