import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import { errorMiddleware } from './middleware/errorMiddleware';
import sequelize from './config/database';

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.use(errorMiddleware);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connected and synchronized');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();

export default app;
