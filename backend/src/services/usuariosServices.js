import UsuariosRepositories from '../repositories/usuariosRepositories.js'
import createError from 'http-errors'

class UsuarioService {
  static async getUsuario() {
    const usuarios = await UsuariosRepositories.getUsuario()

    return usuarios
  } 

  static async novoUsuario(nome, email, senha) {

    const usuarioExiste = await UsuariosRepositories.getUsuarioByEmail(email)
    if(usuarioExiste) {
      throw new createError.Conflict('Usuário já existe')
    } 

    const novoUsu = await UsuariosRepositories.novoUsuario(nome, email, senha)
    return novoUsu
  }

  static async atualizarUsuario(id, dadosUsuario) {
    const atualizarUsu = await UsuariosRepositories.atualizarUsuario(id, dadosUsuario)
    return atualizarUsu
  }

  static async deletarUsuario(id) {
    await UsuariosRepositories.deletarUsuario(id)
  }
}

export default UsuarioService