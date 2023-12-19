
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Posts (){
    const data = await getData()

    return(
        <div>
            <h1>Posts</h1>
            {data.length > 0 && data.map(item => (
      <p key={item.id}>{item.title}</p>
    ))}
    <ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
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