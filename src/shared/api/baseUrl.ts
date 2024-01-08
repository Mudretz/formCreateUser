const {
    PROD,
    VITE_BACKEND_SERVER_SWAGGER_URL: DEV_BACKEND_SERVER_URL,
} = import.meta.env;

export const PROD_BACKEND_SERVER_URL = "";

export const baseUrl: string = PROD
    ? PROD_BACKEND_SERVER_URL
    : DEV_BACKEND_SERVER_URL;