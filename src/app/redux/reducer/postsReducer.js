import { POSTS_LOAD,POSTS_DELETE} from "./type"

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
        case POSTS_DELETE:
           return (()=>{
                const {id}=action;
                const {posts}=state;
                const itemIndex = posts.findIndex(res=>res.id===id);//знаходимо індекс обекта який потрібно змінити
           // створюємо новий стан коментарів
           const nextPosts=[
               ...posts.slice(0,itemIndex),//беремо із старого стану від початку до елемента який потрібно змінити і додаємо ці елементи в новий стан
               ...posts.slice(itemIndex+1)// забераємо все що залишилось в старому масиві коментарів після обєкта якого потрібно було змінити 
           ]
           return{...state,
            posts:nextPosts}})(); //()для запуску внутрішньї функції

           
          
   
        default: return state;
    }
}

