import express from "express"

const router = express.Router()

type Produto = { 
   id: number
   nome: string
   preco: number }

let produtos: Produto[] = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 },
]

router.get("/", (_, res) => res.json(produtos))

router.get("/:id", (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id))
  if (!produto) {
    return res.json({ erro: "Produto não encontrado." })
  }
  res.json(produto)
})

router.post("/", (req, res) => {
  const novoProduto = req.body as Produto
  produtos.push(novoProduto)
  res.json(novoProduto)
})

export default router
