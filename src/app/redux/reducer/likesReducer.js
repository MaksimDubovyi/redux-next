import { INCREMENT,DECREMENT } from "./type"

const initialState ={
    likes:0
}

export const likesReducer=(state=initialState,action)=>
{
    // console.log('likesReducer',action)
    switch(action.type)
    {//спрет це конструкція {...state} робимо копію стану тому що стан вважається не змінним. змінюємо копію і повертаємо її
        case INCREMENT:
            return{...state,
                 likes:state.likes+1}
        case DECREMENT:
            return{...state,likes:state.likes-1}
        default: return state;
    }
}