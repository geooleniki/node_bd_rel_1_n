const {fabricante, produto} = require('./model/Associação')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('Tabelas criadas e sincronizada com o banco de dados!')

    }catch(err){
        console.error('Erro de sincronização com  banco de dados!',err)
    }finally{
        conn.close()
        console.log('Conexão finalizada!')
    }
}

syncDataBase()