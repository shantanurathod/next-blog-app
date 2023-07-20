'use client'
import React from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface blogProps {
  title: String,
  DOP: String,
  content: String,
  clicked: Function,
  index: number,
  slug: String
}

const Blog = ({DOP, title, content, slug, clicked, index}: blogProps) => {
  
  // const clicked = () => {
  //   const router = useRouter();

  //   router.push()
  // }
  return (
    <div className='mb-10 mt-10' >
        <h1 onClick={() => clicked(slug)} className="cursor-pointer text-red-500 text-2xl underline">{index}. {title}</h1>
            <p>{DOP}</p>
            <p>{content}</p>
    </div>
  )
}

export default Blog