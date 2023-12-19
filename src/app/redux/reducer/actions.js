import { INCREMENT,DECREMENT,IPUT_TEXT,COMMENT_CREATE,COMMENT_UPDATE,COMMENT_DELETE,
    COMMENT_LOAD,LOADER_DISPLAY_ON,LOADER_DISPLAY_OFF,ERROR_DISPLAY_ON,ERROR_DISPLAY_OFF,POSTS_LOAD } from "./type";


export function incrementLikes()
{
    return { type:INCREMENT };
}
export function decrementLikes()
{
    return { type:DECREMENT };
}
export function inputText(text)
{
    return {
         type:IPUT_TEXT,
         text
         };
}
export function commentCreate(text,id)
{
    return {
         type:COMMENT_CREATE,
         data:{text,id }
         };
}
export function commentUpdate(text,id)
{
    return {
         type:COMMENT_UPDATE,
         data:{text,id }
         };
}
export function commentDelete(id)
{
    return {
         type:COMMENT_DELETE,
         id
         };
}

// Ця функція є генератором дій для завантаження коментарів.
// Вона повертає функцію (thunk), яка має доступ до методу `dispatch`.
export function commentLoad()
{
    return async dispatch=>{ // Це асинхронна функція, яка приймає `dispatch` як аргумент.
    try{
        dispatch(loaderOn());
        // Здійснюємо асинхронний запит на отримання коментарів з конкретного API-шляху.
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        // Парсимо дані відповіді у формат JSON.
        const jsonData= await response.json();

        //Зробимо затримку зоб побачити як працює loader
        setTimeout(()=>{

             // Відправляємо дію з завантаженими коментарями до сховища Redux.
        dispatch({
            type:COMMENT_LOAD,
            data:jsonData
        })
        dispatch(loaderOff());
        },1000)

    }
    catch(err)
    {
        dispatch(errorOn('Помилка API'));
        dispatch(loaderOff());
    }
       
    }
}


export function loaderOn()
{
    return {
         type:LOADER_DISPLAY_ON,
         };
}
export function loaderOff()
{
    return {
         type:LOADER_DISPLAY_OFF,
         };
}
export function errorOn(text)
{
    return dispatch =>{
        dispatch({
            type:ERROR_DISPLAY_ON,
            text
        }); 
        setTimeout(()=>{dispatch(errorOff())},2000)
    }
}
export function errorOff()
{
    return { type:ERROR_DISPLAY_OFF  };
}




const URL1='https://redux-next-blue.vercel.app';
const URL2='http://localhost:3001';
export function postsLoad()
{
    return async dispatch=>{ // Це асинхронна функція, яка приймає `dispatch` як аргумент.
    try{
        dispatch(loaderOn());
        // Здійснюємо асинхронний запит на отримання коментарів з конкретного API-шляху.
        const response = await fetch(URL2 + `/api/posts`, {
            method: 'GET', 
            next: {
                revalidate: 250,
            },
        });
        // Парсимо дані відповіді у формат JSON.
        const jsonData= await response.json();
console.log("jsonData",jsonData)
        //Зробимо затримку зоб побачити як працює loader
        setTimeout(()=>{

             // Відправляємо дію з завантаженими коментарями до сховища Redux.
        dispatch({
            type:POSTS_LOAD,
            data:jsonData
        })
        dispatch(loaderOff());
        },10)

    }
    catch(err)
    {
        dispatch(errorOn('Помилка API'));
        dispatch(loaderOff());
    }
       
    }
}