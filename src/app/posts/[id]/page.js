'use client'

 import { useDispatch, useSelector } from "react-redux";



export default  function Post({ params: { id } }) 
{
console.log("i1d",id)
// const dispatch=useDispatch();

const posts =useSelector(state =>{
     const {postsReducer}=state; 
     console.log("postsReducer.comments",postsReducer.posts)
 
      // Спробуйте конвертувати id в число, враховуючи можливі випадки, коли id недійсний
      const desiredId = parseInt(id, 10);
  
      if (isNaN(desiredId)) {
        // Якщо id не є числовим значенням, можна обробити цей випадок за необхідності
        console.log("Невірний формат id:", id);
        return null;
      }
  
      const desiredComment = postsReducer.posts.find(
        (posts) => posts.id === desiredId
      );
  
      return desiredComment;
})

console.log("comments",posts)

return (
    <div>
      <h1>{posts ? posts.title : "Коментар не знайдено"}</h1>
      <h1>{posts ? posts.id : "Коментар не знайдено"}</h1>
    </div>
  );
}

// export default function Post({ params: { id } }) {
//     console.log("i1d", id);
  
//     const comments = useSelector((state) => {
//       const { commentsReducer } = state;
//       console.log("commentsReducer.comments", commentsReducer.comments);
  
//       // Спробуйте конвертувати id в число, враховуючи можливі випадки, коли id недійсний
//       const desiredId = parseInt(id, 10);
  
//       if (isNaN(desiredId)) {
//         // Якщо id не є числовим значенням, можна обробити цей випадок за необхідності
//         console.log("Невірний формат id:", id);
//         return null;
//       }
  
//       const desiredComment = commentsReducer.comments.find(
//         (comment) => comment.id === desiredId
//       );
  
//       return desiredComment;
//     });
  
 
  
//     return (
//       <div>
//         <h1>{comments ? comments.text : "Коментар не знайдено"}</h1>
//       </div>
//     );
//   }
  