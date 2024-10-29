import { NextResponse } from 'next/server';
import config from "@/config";
import { DJANGO_BASE_URL, DJANGO_API_ENDPOINT } from '../config';

export async function GET() {
    const environmentInfo = {
        config: {
            isProductionFrontend: config.isProductionFrontend,
            isProductionBackend: config.isProductionBackend,
            backendBaseUrl: DJANGO_BASE_URL,
            backendApiUrl: DJANGO_API_ENDPOINT
        },
        env: {
            NODE_ENV: process.env.NODE_ENV,
            IS_PRODUCTION_FRONTEND: process.env.IS_PRODUCTION_FRONTEND,
            IS_PRODUCTION_BACKEND: process.env.IS_PRODUCTION_BACKEND
        }
    };

    return NextResponse.json(environmentInfo, { status: 200 });
}