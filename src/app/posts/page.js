import { getPosts } from "../services/getPosts"

// async function getData() {
//      const response =await getPosts()

   
//     if (!response) {
//       throw new Error('Failed to fetch data')
//     }
   
//      return response
//   }

export default async function Posts (){
     const data = await getData()

    return(
        <div>
            <h1>Posts</h1>
             {/* <ul className="list-group">
            {data.length > 0 && data.map(item => (
                <li className ="list-group-item" key={item.id}>{item.title}</li>

            ))}
         
            </ul> */}

        </div>
    )
}

// export async function getServerSideProps(context)
// {
//     console.log(context)
//     return{
//       props:{
//         data:[]
//       }
//     }
// }