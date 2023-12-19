import { NextResponse } from 'next/server';

export async function GET(req) {

  console.log("GET")
  try {

    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')
    console.log("id2",id)
    let res=null;
    if(id)
    {
       res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
    else
    {
      res = await fetch('https://jsonplaceholder.typicode.com/posts');
    }

    // Fetch data from an external API
 

    if (!res.ok) {
      // If the response status is not ok, throw an error
      throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON
    const data = await res.json();

    // Return a JSON response with the fetched data
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors and log the details
    console.error('Error in GET request:', error);

    // Return an error response with a 500 status code
    return NextResponse.error({ status: 500, message: 'Internal Server Error' });
  }
}