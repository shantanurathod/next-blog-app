'use client'

import FullBlog from "@/components/fullBlog"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string } }) {

    const [data, setData] = useState()

    useEffect(() => {
        console.log("URI-->", `http://localhost:3000/api/blogs/${params.slug}`)
        fetch(`http://localhost:3000/api/blogs/${params.slug}`)
        .then(response => response.json())
        .then(jsonResponse => setData(jsonResponse))
        .catch(err => console.log("Something went wrong wrong!", err))
    }, [])

    // console.log("data-->", data)

    return (
    <>
    {data && <FullBlog title={data["title"]} DOP={data["DOP"]} content={data["content"]}/>}
    <h1>{params.slug}</h1>
    <Link className="text-center text-blue-500 underline" href="/blogs">Back</Link>
    </>
    )
}