const connect = require("../database/connection") //pegando o mongoose que veio lá de connection.js

//criando um novo schema para usarmos mais tarde.
const userSchema = connect.Schema({ //usando o mongoose que importamos la de connection.js
    user:{type:String},
    pass:{type:String}
})

//exportando esse model com o nome de "user" para podermos usar la nas rotas em index.js
module.exports = connect.model("user", userSchema)