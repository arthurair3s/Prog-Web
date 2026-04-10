import { arrCursos } from './cursoRepository.js'

export const criar = async dadosAlunos => {
  let _id = 1

  const { nome } = dadosAlunos

  /*
  if (!nome) {
    return res.status(400).send('Nome é um atributo obrigatório')
  }
  */

  if (arrCursos.length != 0) {
    const ultimoCurso = arrCursos[arrCursos.length - 1]
    _id = ultimoCurso.cursoId + 1
  }

  arrCursos.push({
    cursoId: _id,
    nome: dadosAlunos.nome
  })

  return 'Curso criado com sucesso'
}

export const listar = async () => {
  return arrCursos
}

export const visualizar = async paramId => {
  const _id = parseInt(paramId)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  /*
  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }
  */

  return curso
}

export const atualizar = async (paramId, bodyCurso) => {
  const _id = parseInt(paramId)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  /*
  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }
  */

  curso.nome = bodyCurso.nome

  return curso
}

export const retificar = async (paramId, bodyCurso) => {
  const _id = parseInt(paramId)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  /*
  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }
  */

  const campos = Object.keys(bodyCurso)

  for (let i = 0; i < campos.length; i++) {
    if (campos[i] != 'cursoId') {
      curso[campos[i]] = req.body[campos[i]]
    }
  }

  return res.status(200).json(curso)
}

export const deletar = async paramId => {
  const _id = parseInt(paramId)
  const lengthArray = arrCursos.length

  const newArrCursos = arrCursos.filter(curso => curso.cursoId !== _id)

  /*
  if (lengthArray == newArrCursos.length) {
    return res.status(404).send('Exclusão não concluída')
  }
  */

  arrCursos.length = 0
  arrCursos.push(...newArrCursos)

  return 'Curso deletado com sucesso'
}
