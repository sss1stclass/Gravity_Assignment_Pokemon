import React from 'react';


export async function generateStaticParams() {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   const data = await response.json();
    //   console.log(data);
    //   return data.map(({ id }:any) => ({ blogID: `${id}` }));
    return [
        { blogID: "1" },
        { blogID: "2" },
        { blogID: "3" },
        { blogID: "4" },
        { blogID: "5" },
    ];
}

const BlogIdPage = async ({ params }: any) => {
    const { blogID } = await params;
    console.log(blogID, 'ths is blog id')
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontSize: 49 }}>
                <strong>
                    This is the Specific Blog page.
                </strong>
            </h2>
            <p style={{ fontSize: 20, textAlign: 'center' }}>You are righ no page no {blogID}</p>
        </div>
    )
}

export default BlogIdPage;
