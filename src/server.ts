import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/index';
import rateLimit from 'express-rate-limit';

// Create a rate limiter with a maximum of 10 requests per hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
});


const app = express();
const PORT = process.env.PORT || 3000;

app.use(limiter);
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
app.all('*', (req, res) => res.status(404).json({
    status: 404,
    error: 'Page not found',
}));

export default app;