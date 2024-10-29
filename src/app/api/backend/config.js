import config from "@/config"

export const DJANGO_API_ENDPOINT = config.isProductionBackend 
    ? config.backendApiUrl 
    : config.backendApiUrlDev;

export const DJANGO_BASE_URL = config.isProductionBackend 
    ? config.backendBaseUrl 
    : config.backendBaseUrlDev;