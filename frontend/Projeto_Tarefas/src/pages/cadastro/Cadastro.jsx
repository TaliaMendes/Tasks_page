import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import '../../style/Cadastro.css'

function Cadastro() {

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate() 

  async function newUser() {
    await api.post('/usuarios', {
      nome: inputName.current.value,
      email: inputEmail.current.value,
      senha:inputPassword.current.value
    })
    navigate('/login')
  }

  return (
    <div className='main'>
      <h1>ORGANIZE</h1> 
      <div className='container'>
        <form>
          <h2>Cadastre-se</h2>
          <input name='nome' type="text" placeholder='Insira seu nome...' autoComplete='off' ref={inputName}  />
          <input name='email' type="email" placeholder='Insira um email...' autoComplete='off' ref={inputEmail} />
          <input name='senha' type="password" placeholder='Insira uma senha...' autoComplete='off' ref={inputPassword} />
          <button type='button' onClick={newUser}>Cadastrar</button>
        </form> 
      </div>
    </div>
  )
}

export default Cadastro