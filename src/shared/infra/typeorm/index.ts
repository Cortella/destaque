import { AppDataSource } from '../../../../data-source'
const startServer = async () => {
  try {
    // Inicializando a conexão com o banco de dados
    await AppDataSource.initialize()
    console.log('Conexão com o banco de dados estabelecida com sucesso!')

    // Lógica para inicializar o servidor, como o Express, por exemplo:
    // app.listen(3000, () => { ... });
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error)
  }
}

startServer()
