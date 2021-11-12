//lógica del servidor 

import express, { Application} from 'express';
import morgan from 'morgan';
import eventosRoutes from './routes/eventos.routes'
import cors from 'cors'

// Initializations
const app: Application = express();

// Middlewares
app.use(express.urlencoded({extended: false})); 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/eventos', eventosRoutes);

export default app;