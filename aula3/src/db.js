const data = {
    medicos: [],
    pacientes: [],
    consultas: []
}

// Criamos um objeto `db` com os métodos 'get' e 'set' para abstrair o acesso.
// Isso evita que outros arquivos modifiquem o objeto `data` diretamente,
// centralizando as operações de leitura e escrita aqui.
const db = {
    // Retorna todos os dados de uma 'tabela' (ex: get('medicos'))
    get: (entity) => {
        return data[entity]
    },

    // Sobrescreve rodos os dados de uma 'tabela' com um novo array (ex: set('medicos', novoArrayDeMedicos))
    set: (entity, newData) => {
        data[entity] = newData
    }
}

export default db