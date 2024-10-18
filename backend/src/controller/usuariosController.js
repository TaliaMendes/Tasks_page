import UsuarioService from '../services/usuariosServices.js'

class UsuarioController {
  static async getUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.getUsuario()
      return res.status(200).json(usuarios)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async novoUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body
      const usuario = await UsuarioService.novoUsuario(nome, email, senha)
      return res.status(201).json(usuario)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async atualizarUsuario(req, res) {
    try {
      const id = req.params.id
      const dadosUsuario = req.body
      const usuarioAtualizado = await UsuarioService.atualizarUsuario(id, dadosUsuario)
      return res.status(200).json(usuarioAtualizado)
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static async deletarUsuario(req, res) {
    try {
      const id = req.params.id
      await UsuarioService.deletarUsuario(id)
      return res.status(204).json("Usuário deletado com sucesso")
    } catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }
}

export default UsuarioController