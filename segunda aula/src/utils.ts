import express from 'express'

const router = express.Router()

router.post('/utils/sum-array', (req, res) => {
  let array = req.body.numbers
  let sum = 0

  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  array.forEach((num: number) => {
    sum += num
  });

  return res.status(200).json(sum)
})

router.post('/utils/max-number', (req, res) => {
  let array = req.body.numbers
  let biggest = array[0]

  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  array.forEach((num: number) => {
    if (num > biggest){
      biggest = num
    }
  })

  return res.status(200).json(biggest)
})

router.post('/utils/average', (req, res) => {
  let array = req.body.numbers
  let count = 0
  let average = 0

  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  array.forEach((num: number) => {
    average += num
    count++
  })

  average /= count

  return res.status(200).json(average)
})

/*
Ordenar um array. O endpoint deve receber um array de números por body e retornar o array ordenado em ordem crescente.
*/
router.post('/utils/sort-array', (req, res) => {
  let array = req.body.numbers
  let n = array.length

  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }

  return res.status(200).json({sortedArray: array})
})

/*
Remover números duplicados. O endpoint deve receber um array de números por body e retornar o array sem valores repetidos.
*/
router.post('/utils/remove-duplicates', (req, res) => {
  let array = req.body.numbers
  
  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  let arrayNew = array.filter((item: number, index: number) => array.indexOf(item) == index)

  return res.status(200).json(arrayNew)
})

/*
Contar quantidade de elementos no array. O endpoint deve receber um array por body e retornar quantos elementos existem nele.
*/ 
router.post('/utils/count-items', (req, res) => {
  let array = req.body.numbers

  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).send('Array inválido ou vazio')
  }

  let count = array.length

  return res.status(200).send(count)
})

/*
Inverter uma string. O endpoint deve receber uma string e retornar a mesma string invertida.
*/
router.get('/utils/reverse-string/:string', (req, res) => {
  const str = req.params.string
  let strLen = str.length
  let reverseString = ''

  if (strLen === 0){
    return res.status(400).send('String está vazia')
  }

  for (let i = strLen -1; i >= 0; i--) {
    reverseString += str[i]
  }

  return res.status(200).json({reverseString: reverseString})
})

/*
Contar palavras de um texto. O endpoint deve receber uma string e retornar quantas palavras existem no texto.
*/
router.post('/utils/count-words', (req, res) => {
  let str = req.body.text

  if (typeof str !== 'string') {
    return res.status(400).send('Texto inválido')
  }

  let wordsArray = str.split(/\s+/)

  let countWords = str === '' ? 0 : wordsArray.length

  return res.status(200).json({ countWords: countWords })
})

/*
Verificar se uma palavra é um palíndromo. O endpoint deve receber uma string e verificar se ela é igual quando lida de trás para frente.
*/
router.get('/utils/palindrome/:string', (req, res) => {
  const str = req.params.string

  if (str.length === 0) {
    return res.status(400).send('String está vazia')
  }

  const normalized = str.replace(/\s+/g, '').toLowerCase()

  let reverseString = ''

  for (let i = normalized.length - 1; i >= 0; i--) {
    reverseString += normalized[i]
  }

  const isPalindrome = normalized === reverseString

  return res.status(200).json({
    originalString: str,
    normalizedString: normalized,
    reverseString: reverseString,
    palindromo: isPalindrome
  })
})

/*
Converter texto para camelCase. O endpoint deve receber uma frase e converter o texto para o formato camelCase.
*/
router.get('/utils/camelcase/:string', (req, res) => {
  const str = req.params.string

  if (str.length === 0) {
    return res.status(400).send('String está vazia')
  }

  const normalized = str.trim().toLowerCase()
  let wordsArray = normalized.split(/\s+/)

  let arrayLen = wordsArray.length
  let camelCaseArray = []

  for (let i = 0; i < arrayLen; i++) {
    if (i === 0) {
      camelCaseArray[i] = wordsArray[i]
    } else {
      camelCaseArray[i] = wordsArray[i]!.charAt(0).toUpperCase() + wordsArray[i]!.slice(1).toLowerCase()
    }
  }

  const camelCaseString = camelCaseArray.join('')

  return res.status(200).json({ camelCase: camelCaseString })
})

/*
Calcular área de um círculo. O endpoint deve receber o valor do raio e calcular a área do círculo utilizando a fórmula matemática.
*/
router.get('/utils/circle-area/:radius', (req, res) => {
  const radius = parseFloat(req.params.radius)

  if (Number.isNaN(radius) || radius <= 0) {
    return res.status(400).json({
      error: 'Radius deve ser um número positivo'
    })
  }

  const area = 3.14 * radius ** 2

  return res.status(200).json({
    radius,
    area
  })
})

/*
Gerar sequência de Fibonacci. O endpoint deve receber um número n e retornar os n primeiros números da sequência de Fibonacci.
*/
router.get('/utils/fibonacci/:num', (req, res) => {
  const num = parseInt(req.params.num)

  if (Number.isNaN(num) || num <= 0) {
    return res.status(400).json({
      error: 'num deve ser um número positivo'
    })
  }

  if (num === 1) {
    return res.json({ sequence: [0] })
  }

  const fibonacci = [0, 1]

  for (let i = 2; i < num; i++) {
    const next = fibonacci[i - 1]! + fibonacci[i - 2]!
    fibonacci.push(next)
  }

  return res.status(200).json({
    sequence: fibonacci
  })
})

export default router