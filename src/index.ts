import server from './server';

const port = process.env.PORT && !isNaN(parseInt(process.env.PORT, 10)) ?
  parseInt(process.env.PORT, 10) :
  3333;

server.listen(port, () => {
  console.info(`listening for requests on http://localhost:${port}`);
});
