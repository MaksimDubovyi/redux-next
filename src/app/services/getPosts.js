

const URL1='https://redux-next-blue.vercel.app';
const URL2='http://localhost:3001';
export const getPosts = async () => {

    try {
        const response = await fetch(URL1 + '/api/posts', {
            method: 'GET', 
            next: {
                revalidate: 250,
            },
        });

        const data = await response.json();
        
        if (!response.ok) throw new Error("Unable to fetch contacts");
    
         return data;
    } catch {  
        console.log("error")
        return null;
    }
}
