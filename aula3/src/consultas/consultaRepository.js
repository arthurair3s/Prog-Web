import db from '../db.js'

export const criar = (novaConsultaData) => {
  let _id = 1;
  const consultas = db.get('consultas');

  if (consultas.length !== 0) {
    const ultimaConsulta = consultas[consultas.length - 1];
    _id = ultimaConsulta.id + 1;
  }

  const novaConsulta = {
    id: _id,
    ...novaConsultaData
  };

  consultas.push(novaConsulta);
  db.set('consultas', consultas);

  return novaConsulta;
}

export const listar = () => {
  return db.get('consultas')
}

export const visualizar = (id) => {
  const consultas = db.get('consultas')
  return consultas.find(consulta => consulta.id === id)
}

export const atualizar = (id, consultaData) => {
  const consultas = db.get('consultas')
  const index = consultas.findIndex(consulta => consulta.id === id)
  
  if (index !== -1) {
    consultas[index] = { ...consultas[index], ...consultaData }
    db.set('consultas', consultas)
    return consultas[index]
  }
  return null
}

export const deletar = (id) => {
  const consultas = db.get('consultas')
  const index = consultas.findIndex(consulta => consulta.id === id)
  
  if (index !== -1) {
    const deleted = consultas.splice(index, 1)[0]
    db.set('consultas', consultas)
    return deleted
  }
  return null
}
