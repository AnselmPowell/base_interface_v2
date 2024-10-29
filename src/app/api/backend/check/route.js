import { NextResponse } from 'next/server';
import config from "@/config"

export const DJANGO_BASE_URL=config.backendBaseUrl

export async function GET() {
      // const url = json.stringify(process.env.BACKEND_BASE_URL)
      const url = ["BEFORE", process.env.BACKEND_BASE_URL, DJANGO_BASE_URL, "NEXT"]
      
      console.log("URL---------------",url )
      const data = {endpoint: url }
      
      return NextResponse.json(data, {status: 200});
}
  
