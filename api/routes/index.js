const bodyParser = require('body-parser') 

const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(
    bodyParser.urlencoded({ extended: false}),
    pessoas,
    niveis,
    turmas
    )
}
    
    //app.get('/', (req,res)=> res.send('Olá'))