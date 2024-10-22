import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
//import api from '../../services/api.js'
import '../../style/Login.css'

function Login() {

  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate() 
  
  async function paginaTarefas() {
    navigate('/tarefas')
  }

  async function paginaCadastro() {
    navigate('/cadastro')
  }

  return (
    <div className='main'>
      <h1>ORGANIZE</h1> 
      <div className='container'>
        <form>
          <h2>Login</h2>
          <input name='email' type="email" placeholder='Insira um email...' autoComplete='off' ref={inputEmail} />
          <input name='senha' type="password" placeholder='Insira uma senha...' autoComplete='off' ref={inputPassword} />
          <button type='button' onClick={paginaTarefas}>Entrar</button>
          <button type='button' onClick={paginaCadastro}>Cadastrar</button>
        </form> 
      </div>
    </div>
  )
}

export default Login