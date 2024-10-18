import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UsuariosRepositories from '../repositories/usuariosRepositories.js'
import dotenv from 'dotenv'

dotenv.config()

class Auth {
  
  static async login(email, senha) {
    
    // Busca o usuário pelo e-mail no banco de dados
    const usuario = await UsuariosRepositories.getUsuarioByEmail(email)
    
    if (!usuario) {
      throw new Error('Credenciais inválidas')
    }

    // Compara a senha digitada com a senha criptografada armazenada
    const senhaValida = await bcrypt.compare(senha, usuario.senha)
    
    if (senhaValida) {
      // Gera o token de acesso se a senha estiver correta
      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '12h' })
      return { token, usuario } 
    } else {
      throw new Error('Credenciais inválidas') 
    }
  }
}

export default Auth
