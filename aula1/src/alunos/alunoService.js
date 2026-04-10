import { arrAlunos } from './alunoRepository.js'

export const criar = async dadosAlunos => {
  let _id = 1

  const { nome, matricula, cursos } = dadosAlunos

  /*
  if (!nome || !matricula || !cursos) {
    return res.status(400).send('Nome, matrícula e cursos são obrigatórios')
  }
  */

  if (arrAlunos.length !== 0) {
    const ultimoAluno = arrAlunos[arrAlunos.length - 1]
    _id = ultimoAluno.alunoId + 1
  }

  arrAlunos.push({
    alunoId: _id,
    nome,
    matricula,
    cursos
  })

  return console.log('Aluno criado com sucesso')
}

export const listar = async () => {
  return arrAlunos
}

export const visualizar = async paramId => {
  const _id = parseInt(paramId)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  /*
  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }
  */

  return aluno
}

export const atualizar = async (paramId, bodyAluno) => {
  const _id = parseInt(paramId)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  /*
  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }
  */

  aluno.nome = bodyAluno.nome
  aluno.matricula = bodyAluno.matricula
  aluno.cursos = bodyAluno.cursos

  return aluno
}

export const retificar = async (paramId, bodyAluno) => {
  const _id = parseInt(paramId)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  /*
  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }
  */

  const campos = Object.keys(bodyAluno)

  for (let i = 0; i < campos.length; i++) {
    if (campos[i] != 'alunoId') {
      aluno[campos[i]] = bodyAluno[campos[i]]
    }
  }

  return aluno
}

export const deletar = async paramId => {
  const _id = parseInt(paramId)
  const lengthArray = arrAlunos.length

  const newArrAlunos = arrAlunos.filter(aluno => aluno.alunoId !== _id)

  /*
  if (lengthArray == newArrAlunos.length) {
    return res.status(404).send('Exclusão não concluída')
  }
  */

  arrAlunos.length = 0
  arrAlunos.push(...newArrAlunos)

  return console.log('Alunos deletado com sucesso')
}
