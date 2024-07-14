
export default async function PageCom({postID}){

await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  } , 2000)
})
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`,
        {
          next : {
            revalidate : 60
          }
        }
      );
      const post = await response.json();

    return(
      
          <div>
              <div style={{
                backgroundColor:"white",
                color:'black',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                margin:'auto',
                padding:'30px',
                width:'70%',
                borderRadius:'30px'

              }}>
                  <h2>{post.id}</h2> 
                  <h2>{post.title}</h2>    
                  <p>{post.body}</p>
              </div>
          </div>
    )
}