'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {  useEffect} from 'react';
import { postsLoad,postsDelete } from '../../redux/reducer/actions';


const ItemList = ({data}) => {

    const dispatch=useDispatch();
    const posts =useSelector(state =>{
         const {postsReducer}=state; 
         return postsReducer.posts;
    })
    useEffect(()=>{
        dispatch(postsLoad(data));
    },[])

    const handleClick = (postId) => {
        dispatch(postsDelete(postId));
    }
    return (



  <div className="container text-center">
        {posts &&posts.length > 0 && posts.map(item => (
          <div className="row justify-content-md-center" key={item.id}>

            <div className="col col-lg-1 mt-2">
            <h3><span className="badge bg-secondary">{item.id}</span></h3>
            </div>  
            <div className="col col-lg-6 mt-2">
            <Link    className="btn btn-primary float-start" href={`/posts/${item.id}`}>{item.title}</Link>
            </div>
            <div className="col col-lg-2">
            <button onClick={() => handleClick(item.id)} type="button" className ="btn btn-danger float-end">Delete</button>
            </div>
          </div>
          
     
            
        ))}
     </div>
      

    );
  };
  
  export { ItemList };




