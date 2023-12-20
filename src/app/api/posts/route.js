import { NextResponse } from 'next/server';

export async function GET() {


  try {

  
   
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    

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