import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const connectionBd = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.CAMINHO_SQLITE, //local do arquivo SQlite
})

export default connectionBd