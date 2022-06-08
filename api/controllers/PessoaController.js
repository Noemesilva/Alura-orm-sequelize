//const { json } = require('express/lib/response')
const { status } = require('express/lib/response')
const database = require('../models')
//const Pessoas = require('../../models/pessoas')

class PessoaController {
  static async pegaTodasAsPessoas(req, res){//não cria uma nova instância de classe, precisa esperar alguns metodos serem resolvidos, para ele devolver a resposta.
      try{ //encontra algum tipo de erro.
        const todasAsPessoas = await database.Pessoas.findAll()//espera ir no banco e voltar,(findAll) encontar tudo.
        return res.status(200).json(todasAsPessoas)
      } catch (error) {
          return res.status(500).json(error.message)
      }
    
    }
    static async pegaUmaMatricula(req,res) {
      const {estudanteId, matriculaId} = req.params
      try{
        const umaMatricula = await database.Matriculas.findOne({ //encontra somente uma registro, com o parametro id  
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)

          }
        })
        return res.status(200).json(umaMatricula)
      } catch(error) {
        return res.status(500).json(error.message)

      }
    }  
    static async criaPessoa(req,res) {
      const novaPessoa= req.body
      try{
        const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
        return res.status(200).json(novaPessoaCriada)

      } catch(error){
        return res.status(500).json(error.message)
      }
    }
    //atualizar um registro
    static async atualizaPessoa(req, res) {
      const {id} = req.params//parametro da requisicao ser alterada
      const novasInfos = req.body //enviado no corpo da requisição
      try{
        await database.Pessoas.update(novasInfos, {where: { id: Number(id)}})
        const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
        return res.status(200).json(pessoaAtualizada)

      } catch (error){
        return res.status(500).json(error.message)
      }
    }
    //deletar um registro
    static async apagaPessoa(req, res){
      const { id }= req.params
      try{

        await database.Pessoas.destroy({where: {id: Number(id)}})
        return res.status(200).json({mensagem: `id ${id} deletado` })

      } catch(error){
        return res.status(500).json(error.message)
      }
    }

    static async criaMatricula(req,res) {
      const { estudanteId } = req.params
      const novaMatricula = {...req.body, estudante_id: Number(estudanteId) }
      try {
        const novaMatriculaCriada =await database.Matriculas.create(novaMatricula)
        return res.status(200).json(novaMatriculaCriada)

      } catch(error) {
        return res.status(500).json(error.message)
      }
    }

    static async atualizaMatricula(req,res) {
      const { estudanteId, matriculaId} = req.params
      const novasInfos = req.body
      try{
        await database.Matriculas.Update(novasInfos, {
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }})
          const MatriculaAtualizada = await database.Matriculas.findOne({
            where: { id: Number(matriculaId)}
          })
          return res.status(200).json(MatriculaAtualizada)

      }catch(error) {
        return res.status(500).json(error.message)
      }
    }

    static async apagaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
        await database.Matriculas.destroy({where: {id: Number(matriculaId)}})
        return res.status(200).json({ mensagem: `id ${matriculaId} deletado`})
        
      } catch(error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = PessoaController