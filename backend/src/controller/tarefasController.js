import TarefasService from '../services/tarefasService.js'

class TarefasController {
  static async getTarefas(req, res) {
    try {
      const tarefas = await TarefasService.getTarefas()
      return res.status(200).json(tarefas)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async getTarefasById(req, res) {
    try {
      const id = req.params.id  //id do usuário para listar suas tarefas

      const tarefasUsuario = await TarefasService.getTarefasById(id)
      return res.status(200).json(tarefasUsuario)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async novaTarefa(req, res) {
    try {
      const id = req.params.id
      const { titulo, descrição, status } = req.body
      const novaTarefa = await TarefasService.novaTarefa(id, titulo, descrição, status)
      return res.status(201).json(novaTarefa)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async atualizarTarefa(req, res) {
    try {
      const id = req.params.id
      const dadosTarefas = req.body
      const tarefaAtualizada = await TarefasService.atualizarTarefa(id, dadosTarefas)
      return res.status(200).json(tarefaAtualizada)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async deletarTarefa(req, res) {
    try {
      const id = req.params.id
      await TarefasService.deletarTarefa(id)
      return res.status(204).json("Tarefa deletada com sucesso")
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }
}

export default TarefasController