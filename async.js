async function fetchData()
{
    try{
        let response=await fetch ('https://jasonplaceholder.typicode.com/posts/1');
        let data= await response.jason();
        console.log(data);
    }
    catch(error)
    {
        console.error('Error fetching data:',error);
    }
}
fetchData();