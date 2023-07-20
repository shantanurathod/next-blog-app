import { NextApiRequest, NextApiResponse } from "next/types";

import { NextResponse } from 'next/server';

export async function GET()
{   let Data = require("@/data.json")
    return NextResponse.json(Data)
}