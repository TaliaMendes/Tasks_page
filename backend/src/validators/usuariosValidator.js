import { z } from 'zod';

const usuarioSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
    .max(20, { message: "Senha deve ter no máximo 20 caracteres" }),
})

const exemploUsuario = {
  nome: 'nome do usuario',
  email: 'usuarioemail@gmail.com',
  senha: '#12345F'
}

try {
  usuarioSchema.parse(exemploUsuario)
} catch (error) {
  console.log('Erro de validação dos dados', error)
}

export default usuarioSchema;
