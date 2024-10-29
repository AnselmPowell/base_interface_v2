import { NextResponse } from 'next/server';
import config from "@/config";

export async function GET() {
    const environmentInfo = {
        config: {
            isProductionFrontend: config.isProductionFrontend,
            isProductionBackend: config.isProductionBackend,
            backendBaseUrl: process.env.DJANGO_BASE_URL,
            backendApiUrl: process.env.DJANGO_API_ENDPOINT
        },
        env: {
            NODE_ENV: process.env.NODE_ENV,
            IS_PRODUCTION_FRONTEND: process.env.IS_PRODUCTION_FRONTEND,
            IS_PRODUCTION_BACKEND: process.env.IS_PRODUCTION_BACKEND
        }
    };

    return NextResponse.json(environmentInfo, { status: 200 });
}