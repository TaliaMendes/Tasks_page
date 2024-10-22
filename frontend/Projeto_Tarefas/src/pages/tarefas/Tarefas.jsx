import { useEffect, useState } from 'react';
import api from '../../services/api.js'

function Tarefas() {
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function getTarefas() {
      try {
        const response = await api.get('/tarefas')
        setTarefas(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas", error)
      }
    }
    getTarefas()
  }, [])

  return (
    <div className="main-tarefas">
      <header>
        <h1>Organize suas Tarefas</h1>
        <button className="btn-nova-tarefa">+ Nova Tarefa</button>
      </header>

      <section className="tarefas-container">
        {tarefas.length > 0 ? (
          <ul className="lista-tarefas">
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className={`tarefa-item ${tarefa.completa ? 'completa' : ''}`}>
                <div className="tarefa-info">
                  <h3>{tarefa.titulo}</h3>
                  <p>{tarefa.descricao}</p>
                </div>
                <div className="tarefa-acoes">
                  <button className="btn-editar">Editar</button>
                  <button className="btn-concluir">{tarefa.completa ? 'Concluída' : 'Concluir'}</button>
                  <button className="btn-excluir">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Você não tem nenhuma tarefa cadastrada.</p>
        )}
      </section>
    </div>
  );
}

export default Tarefas;
