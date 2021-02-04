import app from './app';
import http from 'http'

// Port
const port: string | number = 3000;

app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
