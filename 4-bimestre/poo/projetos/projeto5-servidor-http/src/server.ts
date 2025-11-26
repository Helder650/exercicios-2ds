import http from "http"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000
const NAME = "John"
const AGE = 34

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
  res.end(`Servidor rodando para ${NAME}, idade ${AGE}!`);
});

server.listen(PORT, () => {
  console.log(`Servidor funcionando em http://localhost:${PORT}`)
});

server.close(() => {
  console.log("Servidor encerrado.")
});

export default server