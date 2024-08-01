const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Produto = db.define('produto',{
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: false
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fabricanteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    }
},{
    tableName: 'produtos',
    createdAt: false,
    updatedAt: false
})

module.exports = Produto
