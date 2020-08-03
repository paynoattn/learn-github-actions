import * as express from 'express';
import * as requestIp from 'request-ip';

const app = express();

interface MyRequest extends express.Request {
  ipAddress?: string;
}

app.use((req: MyRequest, _res, next) => {
  req.ipAddress = requestIp.getClientIp(req) as string | undefined;
  next();
});


app.get('/', (req: MyRequest, res) => {
  res.send(`thanks for visiting from ${req.ipAddress}`);
});

export default app;
