'use client'

import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import Blog from "../../components/Blog"




export default function Page() {
    const [data, setData] = useState()
    useEffect( () => {

        fetch('http://localhost:3000/api/blogs')
        .then(response => response.json())
        .then(res => setData(res))
        .catch(err => console.log("Something went wrong!", err))
    }, [])
    const router = useRouter()


    const clicked = (slug: String) => {    
        router.push(`/blogs/${slug}`)
    }
    return (
        <div className="text-center">
            <h1 className="m-3 text-yellow-300 text-xl">All Blogs</h1>
            {data && Object.keys(data).map((key:string, index:number) => {
                // console.log(data[key]["content"])
                const blog = data[key]
                return (
                    <Blog DOP={blog["DOP"]} title={blog["title"]} content={blog["content"]} clicked={clicked} index={index} slug={key}/>
                    // <div>Blogs all over</div>
                )
            })}
            <button className="bg-blue-800 p-2"onClick={() => router.push("/")}>Back to home</button>
        </div>
    );
}