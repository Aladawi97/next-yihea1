// import Todo from "../components/todo";

import Link from "next/link";

export default async  function posts  () {
 
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      next : {
        revalidate : 60
      }
    }
  );
  const ToDo = await response.json();

  const post = ToDo.map((p) =>{

    return(
        <Link href={`/posts/${p.id}`} key={p.id} style={{width:'80%'}}>
            <div  style={{
                textAlign:"center",
                backgroundColor:'white',
                color:'black',
                width:'100%',
                borderRadius:'20px',
                margin:'20px 0',
                }}>
                  <h2 style={{textAlign:"center"}}>{p.id}</h2>
                  <h2 style={{textAlign:"center"}} >{p.title}</h2>
                  <p  style={{ textAlign:'center'}}>{p.body}</p>
                  <hr style={{marginTop:"50px"}}></hr>
            </div>
        </Link>
    )
  })
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      width:'100%'
    }}>
        <h3 style={{textAlign : "center" , marginTop : "20px"  , fontSize : "35px"}} >Posts</h3>
        {post}
    
    </div>
    
  )
}

