import db from '../db.js'

export const criar = (novoMedicoData) => {
  let _id = 1;
  const medicos = db.get('medicos');

  if (medicos.length !== 0) {
    const ultimoMedico = medicos[medicos.length - 1];
    _id = ultimoMedico.id + 1;
  }

  const novoMedico = {
    id: _id,
    ...novoMedicoData
  };

  medicos.push(novoMedico);
  db.set('medicos', medicos);

  return novoMedico;
}

export const listar = () => {
  return db.get('medicos')
}

export const visualizar = (id) => {
  const medicos = db.get('medicos')
  return medicos.find(medico => medico.id === id)
}

export const atualizar = (id, medicoData) => {
  const medicos = db.get('medicos')
  const index = medicos.findIndex(medico => medico.id === id)
  
  if (index !== -1) {
    medicos[index] = { ...medicos[index], ...medicoData }
    db.set('medicos', medicos)
    return medicos[index]
  }
  return null
}

export const deletar = (id) => {
  const medicos = db.get('medicos')
  const index = medicos.findIndex(medico => medico.id === id)
  
  if (index !== -1) {
    const deleted = medicos.splice(index, 1)[0]
    db.set('medicos', medicos)
    return deleted
  }
  return null
}
