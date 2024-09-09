const { funcionarios} = require("./data")
//resultado >= 1000 && resultado <= 10000
function buscarporsalario(req,res) {
    const {salario} = req.params
    const resultado = funcionarios.filter(sal => sal.salario == salario)
    
    if (resultado.length > 0) {
        res.status(200).send({
            mensagem:"Funcionário encontrado",
        funcionario: resultado})
        
    }
else {
    res.status(404).send({
        mensagem: "Funcionário não encontrado"

    })
}
}
module.exports = buscarporsalario