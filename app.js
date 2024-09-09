const express = require("express")
const app = express()
const porta = 4000
app.use(express.json())

app.get('/', (req, res) => {
    res.send("estamos aqui")
})

app.listen(porta, () => {
    console.log(`estamos aqui ${porta}`)
})

const criarfuncionario = require("./criarfuncionario")
const listarfuncionario = require("./listarfuncionario")
const atualizarfuncionario = require("./atualizarfuncionario")
const deletarfuncionario = require("./deletaarfuncionario")
const buscarporsalario = require("./buscarporsalario")

app.get("/listar", listarfuncionario)
app.get("/buscar/:salario", buscarporsalario)
app.post("/criar", criarfuncionario )
app.put("/atualizar/:id" ,atualizarfuncionario)
app.delete("/deletar/:id",deletarfuncionario)