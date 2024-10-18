import { DataTypes } from 'sequelize'
import connection from '../database/connection.js'

const Usuario = connection.define('usuarios', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,  
    unique: true
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default Usuario
