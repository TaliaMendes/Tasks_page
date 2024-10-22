import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import Tarefas from './pages/tarefas/Tarefas.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/tarefas' element={< Tarefas/>} />
    </Routes>
  </BrowserRouter>
)
