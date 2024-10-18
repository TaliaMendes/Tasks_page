import Usuarios from '../model/Usuarios.js'
import bcrypt from 'bcrypt'

class UsuariosRepositories {
  static async getUsuario() {
    const usuarios = await Usuarios.findAll({raw:true})

    return usuarios
  }

  static async getUsuarioByEmail(email) {
    const usuario = await Usuarios.findOne({
      where: {
        email: email,
      }
    })

    return usuario
  }

  static async novoUsuario(nome, email, senha) {

    const hashedPassword = await bcrypt.hash(senha, 10) //faz a cripitografia da senha do usuário

    const novoUsuario = await Usuarios.create({
      nome, email, 
      senha: hashedPassword
    })

    return novoUsuario
  }

  static async atualizarUsuario(id, dadosUsuario) {

    if (dadosUsuario.senha) {
      // Criptografa a nova senha antes de atualizar
      const hashedPassword = await bcrypt.hash(dadosUsuario.senha, 10);
      dadosUsuario.senha = hashedPassword;
    }
    await Usuarios.update( 
      dadosUsuario, 
      { where: {id: id} }
    ) 
    const usuarioAtualizado = await Usuarios.findOne({ where: { id: id } })

    return usuarioAtualizado
  }

  static async deletarUsuario(id) {
    await Usuarios.destroy({ where: {id : id}})
  }

}

export default UsuariosRepositories