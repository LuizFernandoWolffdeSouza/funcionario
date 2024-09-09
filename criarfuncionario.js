const { funcionarios}= require("./data")
//    {id: 1, nome: "Carlos", cargo: "pedreiro", departamento: "construção", salario: 2000},
function criarfuncionario(req,res
) {
    console.log(req.body)

    const novofuncionario = {
        id: funcionarios.length++,
        nome: req.body.nome,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        salario: req.body.salario
    }
    funcionarios.push(novofuncionario)
    res.status(200).send({
        mensagem: "Funcionario cadastrado com sucesso",
        funcionario: novofuncionario
    })
    
}
module.exports = criarfuncionario