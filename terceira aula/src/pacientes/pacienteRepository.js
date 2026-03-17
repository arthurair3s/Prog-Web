import db from '../db.js'

export const criar = (novoPacienteData) => {
  let _id = 1;
  const pacientes = db.get('pacientes');

  if (pacientes.length !== 0) {
    const ultimoPaciente = pacientes[pacientes.length - 1];
    _id = ultimoPaciente.id + 1;
  }

  const novoPaciente = {
    id: _id,
    ...novoPacienteData
  };

  pacientes.push(novoPaciente);
  db.set('pacientes', pacientes);

  return novoPaciente;
}

export const listar = () => {
  return db.get('pacientes')
}

export const visualizar = (id) => {
  const pacientes = db.get('pacientes')
  return pacientes.find(paciente => paciente.id === id)
}

export const atualizar = (id, pacienteData) => {
  const pacientes = db.get('pacientes')
  const index = pacientes.findIndex(paciente => paciente.id === id)
  
  if (index !== -1) {
    pacientes[index] = { ...pacientes[index], ...pacienteData }
    db.set('pacientes', pacientes)
    return pacientes[index]
  }
  return null
}

export const deletar = (id) => {
  const pacientes = db.get('pacientes')
  const index = pacientes.findIndex(paciente => paciente.id === id)
  
  if (index !== -1) {
    const deleted = pacientes.splice(index, 1)[0]
    db.set('pacientes', pacientes)
    return deleted
  }
  return null
}
