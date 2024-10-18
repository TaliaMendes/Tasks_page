import { z } from 'zod';

const tarefaSchema = z.object({
  titulo: z.string().min(1, { message: "O titulo da tarefa é obrigatório" }),
  descrição: z.string().max(100, {message: "'A descrição da tarefa deve ter no máximo 100 caracteres'"}),
  status: z.enum(['pendente', 'finalizado'], { message: "Status deve ser 'pendente' ou 'finalizado'" })
  
})

const exemploTarefa = {
  titulo: 'Realizar tarefa',
  descrição: 'Uma breve descrição sobre a tarefa que deve ser realizada',
  status: 'pendente'
}

try {
  tarefaSchema.parse(exemploTarefa)
} catch (error) {
  console.log('Erro de validação dos dados', error)
}

export default tarefaSchema;
