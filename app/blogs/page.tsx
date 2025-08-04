import Link from "next/link";

const BlogMainPage = ()=>{
    return (
        <>
              <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                <h1 style={{fontSize:30}}>Welcome to Our Main Page of Blog</h1>
                <ol className="blog-links">
                  <li>
                    <Link href="/blogs/1">Blog 1</Link>
                  </li>
                  <li>
                    <Link href="/blogs/2">Blog 2</Link>
                  </li>
                  <li>
                    <Link href="/blogs/3">Blog 3</Link>
                  </li>
                </ol>
              </div>

        </>
    )
}
export default BlogMainPage;