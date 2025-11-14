import express from "express"
import helmet from "helmet"
import path from "path"
import router from "./routes"

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../public")))

app.use("/", router)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando no link http://localhost:${PORT}`);
})

server.close(() => {
  console.log("Servidor encerrado.")
});

export default server
