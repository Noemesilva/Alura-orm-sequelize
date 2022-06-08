const { DatabaseError } = require("sequelize/types")

class NivelController {
    static async pegaTodosOsNiveis(req,res){
        try {
            const TodosOsNiveis= await DatabaseError.Niveis.findAll()
            return res.status(200).json(TodosOsNiveis)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}