import express, { Application, Request, Response } from 'express';
import { getJoke } from './fetchers/joke';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello, world! Go try /joke now...' });
});

app.get('/joke', async (req: Request, res: Response) => {
  const joke = await getJoke();
  console.log(joke);

  res.send(joke);
});

app.get('/*', (req: Request, res: Response) => {
  res
    .status(404)
    .send({
      message: 'Not all that Wander are lost... But I think you may be.',
    });
});

app.listen(3000);

console.log('Server Running on port 3000');
