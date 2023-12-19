'use client'
import Link from "next/link";
import { getPosts } from "../services/getPosts"
import { ItemList } from "./components/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { useState , useEffect} from 'react';// для default стану нашого поля input
import { postsLoad } from '../redux/reducer/actions';



export default  function Posts (){
 
    const dispatch=useDispatch();

    const comments =useSelector(state =>{
         const {postsReducer}=state; 
         return postsReducer.posts;
    })
    useEffect(()=>{
        dispatch(postsLoad());
    },[])//пустий масив [] томущо загрузку будемо робити один раз при старті додатку


    return(
        <div>
            <h1>Posts</h1>
             <ul className="list-group">
             {comments &&comments.length > 0 && comments.map(item => (
                <ItemList id={item.id} title={item.title} key={item.id}/>
            ))} 
         
            </ul>

        </div>
    )
}


/// Cервер ++++ для СЕО

// import Link from "next/link";
// import { getPosts } from "../services/getPosts"
// import { ItemList } from "./components/ItemList";
// import { useDispatch } from "react-redux";


// async function getData() {
    

//      try {
//         const response =await getPosts()
//         return response
//       }
//      catch (error) {
//         console.error('Error fetching data:', error);
//         throw new Error('Failed to fetch data');
//       }
   
  
//   }

// export default async function Posts (){
//      const data = await getData()

//     return(
//         <div>
//             <h1>Posts</h1>
//              <ul className="list-group">
//             {data &&data.length > 0 && data.map(item => (
//                 <ItemList id={item.id} key={item.id}/>
//             ))}
         
//             </ul>

//         </div>
//     )
// }

