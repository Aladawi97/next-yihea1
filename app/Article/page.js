import Link from "next/link"


export default function Article(){
    return(
        <div>
            <h3>Article</h3>
            <Link href="/posts">
                <button>Gi To Posts</button>
            </Link>

        </div>
    )
}