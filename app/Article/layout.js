
export const metadata = {
    title : "Article Page"
}

const layoutArticle = ({children})=>{
    return(
        <div>
            <h2 style={{textAlign:"center"}}>Article Layout</h2>
            {children}
        </div>
    )
}
export default layoutArticle;