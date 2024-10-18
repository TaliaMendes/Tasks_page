import Auth from '../services/authServices.js'

class AuthController {
  static async authenticate(req, res) {
    try{
      const { email, senha } = req.body 
      const { token, user } = await Auth.login(email, senha)
      return res.status(200).json({ token, user })
    }  catch (error) {
      return res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }
}

export default AuthController