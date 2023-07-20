import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  let Data = require('@/data.json')
  const key:string = request.url.split('/').at(-1)!
  // console.log("url-->", typeof(request.url.split('/').at(-1)))
  return NextResponse.json(Data[key])
}