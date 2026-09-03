const express = require('express');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
const alteRouter = require('./Router/routes');

const app = express();

// forma de ler JSON 
app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.use('/pessoa', alteRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //entregar uma porta
    console.log('Conectamos com o Banco')
    app.listen(3000)
})
.catch((err) => console.log('erro ao conectar', err.message))
