import usuarioSchema from '../validators/usuariosValidator.js'

export const usuarioMiddleware = (req, res, next) => {
  const {nome, email, senha } = req.body

  const validacao = usuarioSchema.safeParse({
    nome,
    email,
    senha,
  })

  if(!validacao.success) {
    const mensagemErro = validacao.error.errors.map(
      (error) => error.message,
    )
    const errorMessage = mensagemErro.join(', ')
    return res.status(400).json({ error: errorMessage })
  }

  next()
}