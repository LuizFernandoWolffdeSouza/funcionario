const {funcionarios} = require("./data")

function listarfuncionario (req, res) {
    res.status(200).send(funcionarios)
    
}
module.exports = listarfuncionario