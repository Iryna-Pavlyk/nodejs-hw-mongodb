import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from '.env';

const PORT = Number(env('PORT', '3000'));

const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: { target: 'pino-pretty' },
    }),
  );

  app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
