import tarefasRepositories from '../repositories/tarefasRepositories.js'

class TarefasService {
  static async getTarefas() {
    const tarefas = await tarefasRepositories.getTarefas()

    return tarefas
  }

  static async getTarefasById(id) {
    const tarefasUsuario = await tarefasRepositories.getTarefasById(id)

    return tarefasUsuario
  }

  static async novaTarefa(id, titulo, descrição, status) {
    const novaTarefa = await tarefasRepositories.novaTarefa(id, titulo, descrição, status)

    return novaTarefa
  }

  static async atualizarTarefa(id, dadosTarefa) {
    const atualizarTarefa = await tarefasRepositories.atualizarTarefa(id, dadosTarefa)

    return atualizarTarefa
  }

  static async deletarTarefa(id) {
    const deletarTarefa = await tarefasRepositories.deletarTarefa(id)

    return deletarTarefa
  }
}

export default TarefasService