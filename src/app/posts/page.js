

/// Cервер ++++ для СЕО

import { getPosts } from "../services/getPosts"
// import { ItemList } from "./components/ItemList";



async function getData() {
    

     try {
        const response =await getPosts()
        return response
      }
     catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
   
  
  }

export default async function Posts (){
     const data = await getData()

    return(

        <div>
             <h1>Posts</h1>
             {/* <ItemList data={data}/> */}
        </div>

    )
}

