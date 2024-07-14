import PageCom from "@/app/components/pageCom"
import { Suspense } from "react"


export default async function PostDetailes({params}){
    const postID = params.postID


    return(
      
          <div>
              <h1 style={{textAlign:'center' , marginBottom:'59px'}}>
                 Posts Detailes 
              </h1>
              <Suspense fallback={<div><h2 style={{textAlign:'center'}}>Lodaing ...</h2></div>}>
              <PageCom postID={postID} />
              </Suspense>
             
          </div>
    )
}