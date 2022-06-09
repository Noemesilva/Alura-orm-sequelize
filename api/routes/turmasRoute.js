const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const TurmaController = require('../controllers/TurmasController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.apagaTurma)
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)

module.exports = router