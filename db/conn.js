const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('rel_1_n','root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log("Conexã realizada com o banco de dados!")
})
.catch((err)=>{
    console.error("Erro de conexão com o banco de dados!",err)
})

module.exports = sequelize