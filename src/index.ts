import express from 'express'
import { routes } from './routes';

const server = express();
const port = 3000

server.use(express.json())
server.use(routes)

server.listen(port, () => {
    console.log(`
    server running in http://localhost:${port}
    `)
})