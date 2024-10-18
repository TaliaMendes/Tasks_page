import express from 'express'
import dotenv from 'dotenv'
import connection from './database/connection.js'
import routes from './routes/Routes.js'
import Usuario from './model/Usuarios.js'
import Tarefas from './model/Tarefas.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(routes)

connection.authenticate()
  .then(() => {
    console.log('Banco de dados conectado com sucesso')
    return connection.sync({ force: false });
    //return connection.sync({ force: true });
  })
  .catch((error) => {
    console.log(error)
  })

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})