'use client'

 import {  useSelector } from "react-redux";



export default  function Post({ params: { id } }) 
{

    const posts =useSelector(state =>{
     const {postsReducer}=state; 


      const desiredId = parseInt(id, 10);
  
      if (isNaN(desiredId)) {
        console.log("Невірний формат id:", id);
        return null;
      }
  
      const desiredComment = postsReducer.posts.find(
        (posts) => posts.id === desiredId
      );
  
      return desiredComment;
})


return (
    <div>
      <h1>{posts ? posts.title : "Коментар не знайдено"}</h1>
      <h1>{posts ? posts.id : "Коментар не знайдено"}</h1>
    </div>
  );
}



