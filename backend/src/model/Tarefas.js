import { DataTypes } from 'sequelize'
import connection from '../database/connection.js'
import Usuarios from './Usuarios.js';

const Tarefas = connection.define('tarefas' , {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,   
  },

  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,   
  },

  status: {
    type: DataTypes.ENUM('pendente', 'concluida'),
    defaultValue: 'pendente',  // Status inicial da tarefa será 'pendente'
  }

})

Usuarios.hasMany(Tarefas, {
  foreignKey: 'clienteId',   // Chave estrangeira em Tarefa
  onDelete: 'CASCADE'        // Se o cliente for deletado, as tarefas também serão
})

Tarefas.belongsTo(Usuarios, {
  foreignKey: 'clienteId',   // A Tarefa pertence a um Cliente
})

export default Tarefas