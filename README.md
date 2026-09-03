# API Rest usando Node

API simples de CRUD de pessoas, criada para estudo de Node.js, Express e MongoDB.

## O que o projeto faz

A aplicação permite:

- Listar pessoas cadastradas
- Buscar uma pessoa pelo ID
- Cadastrar uma nova pessoa
- Atualizar dados de uma pessoa
- Deletar uma pessoa

Cada pessoa possui:

- `nome`
- `salario`
- `aprovado`

## Tecnologias usadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Zod
- Dotenv
- Nodemon

## Como rodar

Instale as dependências:

```bash
npm install
```

Antes de iniciar a aplicação, é necessário ter um banco criado no MongoDB Atlas.

Crie um arquivo `.env` com base no `.env.example`:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
```

Inicie o servidor:

```bash
npm start
```

A API roda em:

```txt
http://localhost:3000
```

## Rotas

```txt
GET    /pessoa
GET    /pessoa/:id
POST   /pessoa
PATCH  /pessoa/:id
DELETE /pessoa/:id
```

## Exemplo de cadastro

```json
{
  "nome": "Joao",
  "salario": 2500,
  "aprovado": true
}
```
