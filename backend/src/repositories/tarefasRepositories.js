import Tarefas from '../model/Tarefas.js'

class TarefasRepositories {
  static async getTarefas() {
    const tarefas = await Tarefas.findAll({raw:true})

    return tarefas
  }

  static async getTarefasById(id) {
    const tarefasID = await Tarefas.findOne({
      where: {
        clienteId : id
      }
    })

    return tarefasID
  }

  static async novaTarefa(id, titulo, descrição, status) {
    const novaTarefa = await Tarefas.create({
      titulo : titulo,
      descricao : descrição,
      status : status,
      clienteId : id
    })

    return novaTarefa
  }

  static async atualizarTarefa(id, dadosTarefa) {
    await Tarefas.update( 
      dadosTarefa, 
      { where: {id: id} }
    ) 
    const tarefaAtualizada = await Tarefas.findOne({ where: { id: id } })

    return tarefaAtualizada
  }

  static async deletarTarefa(id) {
    await Tarefas.destroy({ where: {id : id}})
  }
}

export default TarefasRepositories