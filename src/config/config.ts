import dotenv from 'dotenv';
dotenv.config();

export const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_NAME: process.env.DB_NAME || 'invoice_management',
    PORT: process.env.PORT || 3000
};
