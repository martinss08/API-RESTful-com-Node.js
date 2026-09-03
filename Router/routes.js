const router = require('express').Router();
const Pessoa = require('../models/Pessoa');
const createPessoaValidate = require('../Validators/PessoaValidatores');

//Listar pessoas
router.get('/', async (req, res ) => {
    try {
        const user = await Pessoa.find({});

        return res.status(200).json({
            message: "Lista de Pessoas",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Nenhuma pessoa encontrada na lista"
        })
    }
})

    //Pegando pessoa expecifica
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const onePessoa = await Pessoa.findOne({_id: id});

        if (!onePessoa) {
            return res.status(404).json({
                message: "Pessoa não encontrada"
            });
        }

        return res.status(200).json({
            message: `Pessoa do id: ${id} encontrada`,
            data: onePessoa
        })
    } catch (error) {
        return res.status(500).json({
            message: "Nenhuma pessoa encontrada"
        })
    }
})

    //Cadastrar pessoas
router.post('/', async (req, res) => {

    const result = createPessoaValidate.safeParse({
        body: req.body
    });

    if (!result.success) {
        return res.status(400).json({
            message: 'Erro de validação',
            errors: result.error.issues
        });
    }
    
    const {nome, salario, aprovado} = req.body;

    try {
        const data = await Pessoa.create({nome, salario, aprovado});

        return res.status(201).json({
            'message': "Pessoa Criado com Sucesso",
            'data':   data
        })
    } catch (error) {
        return res.status(500).json({
            message: "Erro ao criar pessoa",
            error: error.message
        })
    }
})

    //Atualizar dadosda pessoa
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    if(!id) {
        return res.status(500).json({
            message: "Nenhuma pessoa encontrada"
        })
    }

    const {nome, salario, aprovado} = req.body;
    const upData = {};

    if (nome !== undefined) upData.nome = nome;
    if (salario !== undefined) upData.salario = salario;
    if (aprovado !== undefined) upData.aprovado = aprovado;

    try {
        const pessoaUpdate = await Pessoa.updateOne({_id: id}, upData)

        if (pessoaUpdate.matchedCount === 0) {
            return res.status(404).json({
                message: "Pessoa não encontrada"
            });
        }

        return res.status(200).json({
            message: `Datos atualizado`,
            data: pessoaUpdate
        })
    } catch (error) {
        return res.status(500).json({
            message: "Nenhuma pessoa encontrada"
        })
    }
});

    // Deletando pessoa
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

   try {
       const result = await Pessoa.deleteOne({_id: id});

       if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Pessoa não encontrada"
            });
        }

        return res.status(200).json({
            message: `Pessoa deletada com sucesso`,
        })
   } catch (error) {
        return res.status(500).json({
            message: "Nenhuma pessoa encontrada"
        })
   }
})

module.exports = router;
