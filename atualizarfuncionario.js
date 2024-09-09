const { funcionarios } = require("./data")
//{id: 1, nome: "Carlos", cargo: "pedreiro", departamento: "construção", salario: 2000},
function atualizarfuncionario(req, res) {
    const { id } = req.params
    const novonome = req.body.nome
    const novocargo = req.body.cargo
    const novodepartamento = req.body.departamento
    const novosalario = req.body.salario

    const verificar = funcionarios.find(f => f.id == id)
    if (!verificar) {
        res.status(400).send("Não foi possivel cadastrar")

    }
    
    verificar.nome = novonome
    verificar.cargo = novocargo
    verificar.departamento = novodepartamento
    verificar.salario = novosalario
    res.status(200).send({
        mensagem: "Funcionario cadastrado com sucesso",
        funcionario: verificar
    })



}
module.exports = atualizarfuncionario
