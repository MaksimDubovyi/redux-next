'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {  useEffect} from 'react';// для default стану нашого поля input
import { postsLoad } from '../../redux/reducer/actions';


const ItemList = ({data}) => {

    const dispatch=useDispatch();
    const posts =useSelector(state =>{
         const {postsReducer}=state; 
         return postsReducer.posts;
    })
    useEffect(()=>{
        dispatch(postsLoad(data));
    },[])

    return (

        <ul className="list-group">
        {posts &&posts.length > 0 && posts.map(item => (
            <Link  key={item.id}  className="btn btn-primary" href={`/posts/${item.id}`}>{item.title}</Link>
        ))}
        </ul>

    );
  };
  
  export { ItemList };


// const ItemList = ({ id ,title}) => {

//   return (
//     <li className="list-group-item">
//      <Link   className="btn btn-primary" href={`/posts/${id}`}>{title}</Link>
     
//     </li>
//   );
// };

// export { ItemList };

