import express from 'express';
import buildRoutes from './routes/build-routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/build', buildRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;