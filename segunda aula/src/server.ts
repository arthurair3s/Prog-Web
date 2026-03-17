import express from 'express';
import utilsRoutes from './utils.js'

const app = express();
const PORT = 3000;

app.use(express.json())

app.use(utilsRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});