const {z} = require('zod');

const createPessoaValidate = z.object({
    body: z.object({
        nome: z
            .string({ required_error: "O nome é obrigatorio"})
            .min(3, "O campo deve ter no minimo 3 caracteres")
            .max(150, "O campo nome deve ter no maximo 150 caracteres"),

        salario: z
            .number({ required_error: 'O campo salario é obrigatorio'})
            .positive("O Salario deve ser maior zero"),

        aprovado: z
            .boolean({ required_error: "O campo aprovado é obrigatorio"})
    })
});

module.exports = createPessoaValidate;