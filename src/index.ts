import express from 'express';

import routes from './routes/routes'
import { errorMiddleware } from './middlewares/errorMiddleware';

const app: express.Express = express()

app.use(express.json())

app.use(routes)

app.use(errorMiddleware)

app.listen(3000, () => console.log('Running on port 3000'))


export default app;
