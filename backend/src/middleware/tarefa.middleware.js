import tarefaSchema from '../validators/tarefasValidator.js'

export const tarefaMiddleware = (req, res, next) => {
  const {titulo, descrição, status } = req.body

  const validacao = tarefaSchema.safeParse({
    titulo,
    descrição,
    status,
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