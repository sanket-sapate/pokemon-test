import path from 'path';
import { fileURLToPath } from 'url';
import express, { json,static as static_ } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { join } from 'path';

import connectDatabase from './database/connectDatabase.js';
import authRouter from './routes/auth.js';
import pokemonRouter from './routes/pokemon.js';
import { FRONTEND_URL } from "./config/config.js";
const app = express();

app.use(morgan('common'));
app.use(json());
app.use(cors({
    origin: FRONTEND_URL,
    credentials:true
}));

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use('/api/auth', authRouter);
app.use('/api/pokemon', pokemonRouter);

app.use('/', static_('../frontend/dist'));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/dist/index.html'));
})

const port = process.argv[2] || 3035;

connectDatabase()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening to http requests on http://localhost:${port}`)
        return
    })
})