const mongoose = require('mongoose');

const Pessoa = mongoose.model('Pessoal', {
    nome: String,
    salario: Number,
    aprovado: Boolean
});

module.exports = Pessoa;