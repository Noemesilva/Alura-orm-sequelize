const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const TurmaController = require('../controllers/TurmasController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.apagaTurma)

module.exports = router