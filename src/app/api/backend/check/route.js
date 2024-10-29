import { NextResponse } from 'next/server';
import config from "@/config";

export async function GET() {
  // Detailed environment information
  const environmentInfo = {
    // Raw environment variables
    rawEnv: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
      BACKEND_BASE_URL_DEV: process.env.BACKEND_BASE_URL_DEV,
      IS_PRODUCTION_BACKEND: process.env.IS_PRODUCTION_BACKEND,
      NODE_ENV: process.env.NODE_ENV,
    },
    // Config values
    configValues: {
      backendBaseUrl: config.backendBaseUrl,
      backendApiUrl: config.backendApiUrl,
      isProductionBackend: config.isProductionBackend,
    },
    // Next.js public runtime config
    publicRuntimeConfig: {
      BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    },
    // Additional debug info
    debug: {
      timestamp: new Date().toISOString(),
      isServer: typeof window === 'undefined',
    }
  };

  console.log("Environment Check:", JSON.stringify(environmentInfo, null, 2));
  
  return NextResponse.json(environmentInfo, { status: 200 });
}