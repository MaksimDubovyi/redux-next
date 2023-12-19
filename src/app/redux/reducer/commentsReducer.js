import { COMMENT_CREATE,COMMENT_UPDATE,COMMENT_DELETE,COMMENT_LOAD } from "./type"

const initialState ={
    comments:[]
}

export const commentsReducer=(state=initialState,action)=>
{
    switch(action.type)
    {//спрет це конструкція {...state} робимо копію стану тому що стан вважається не змінним. змінюємо копію і повертаємо її
        case COMMENT_CREATE:
            return{...state,
                comments:[...state.comments,action.data]}//додаємо старі коментарі та новий 
        case COMMENT_UPDATE:
            const {data}=action;
            const {comments}=state;
            const itemIndex = comments.findIndex(res=>res.id===data.id);//знаходимо індекс обекта який потрібно змінити
            // створюємо новий стан коментарів
            const nextComments=[...comments.slice(0,itemIndex),//беремо із старого стану від початку до елемента який потрібно змінити і додаємо ці елементи в новий стан
                data, //додаємо новий коментар
                ...comments.slice(itemIndex+1)// забераємо все що залишилось в старому масиві коментарів після обєкта якого потрібно було змінити 
            ]
            return{...state,
                comments:nextComments}
        case COMMENT_DELETE:
            //логіка такаж як і в оновлені але використаю стрілкову функцію щоб не було конфліктів імен
            return (()=>{
                 const {id}=action;
                 const {comments}=state;
                 const itemIndex = comments.findIndex(res=>res.id===id);//знаходимо індекс обекта який потрібно змінити
            // створюємо новий стан коментарів
            const nextComments=[
                ...comments.slice(0,itemIndex),//беремо із старого стану від початку до елемента який потрібно змінити і додаємо ці елементи в новий стан
                ...comments.slice(itemIndex+1)// забераємо все що залишилось в старому масиві коментарів після обєкта якого потрібно було змінити 
            ]
            return{...state,
                comments:nextComments}})(); //()для запуску внутрішньї функції

        case COMMENT_LOAD:
            //iз стороннього сервісу приходить масив обєктів які не співпадають структурою із нашим масивом тому 
            //за до помоги методу map я створю новий масив із потрібними обєктами
            const commentsNew = action.data.map(res=>{
                return {
                    text:res.name,
                    id: res.id
                }
            })
            return{...state,
                        comments:commentsNew}

           
          
   
        default: return state;
    }
}