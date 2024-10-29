import { NextResponse } from 'next/server';
import config from "@/config"

export const DJANGO_BASE_URL=config.backendBaseUrl

export async function GET() {
      console.log("URL---------------", DJANGO_BASE_URL)
      const data = {endpoint: process.env.BACKEND_BASE_URL}
      
      return NextResponse.json(data, {status: 200});
}
  
