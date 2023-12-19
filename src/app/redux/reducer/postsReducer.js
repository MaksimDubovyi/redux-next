import { POSTS_LOAD,COMMENT_UPDATE,COMMENT_DELETE,COMMENT_LOAD } from "./type"

const initialState ={
    posts:[]
}

export const postsReducer=(state=initialState,action)=>
{
    switch(action.type)
    {//спрет це конструкція {...state} робимо копію стану тому що стан вважається не змінним. змінюємо копію і повертаємо її
        

        case POSTS_LOAD:
            //iз стороннього сервісу приходить масив обєктів які не співпадають структурою із нашим масивом тому 
            //за до помоги методу map я створю новий масив із потрібними обєктами
            const postsNew = action.data.map(res=>{
                return {
                    id: res.id,
                    userId:res.userId,
                    body:res.body,
                    title:res.title,
                    
                }
            })
            return{...state,
                posts:postsNew}

           
          
   
        default: return state;
    }
}

