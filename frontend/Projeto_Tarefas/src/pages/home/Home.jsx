import { useNavigate } from 'react-router-dom'
import '../../style/Home.css'

function Home() {
  const navigate = useNavigate()

  async function entrar(){
    navigate('/login')
  }

  return (
    <div className='mainHome'>
      <h1 className='logoHome'>ORGANIZE</h1> 
      <p>Organize suas tarefas e alcance suas conquistas diárias!</p>
      <div className="botao">
        <button onClick={entrar}>Entrar</button>
      </div>
    </div>
  )
}

export default Home