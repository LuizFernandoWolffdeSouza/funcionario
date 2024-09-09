const {funcionarios } = require("./data")
function deletarfuncionario(req, res) {
    const { id } = req.params
  const verificar = funcionarios.findIndex(fu => fu.id == id)

  if (verificar === -1) {
   return res.status(400).send("Funcionário não deletado") 
  }

const funcionariodeletado = funcionarios.splice(verificar, 1) [0]
res.status(200).send({
    mensagem: "Funcionário deletado com sucesso",
    funcionario: funcionariodeletado

})



}
module.exports =deletarfuncionario