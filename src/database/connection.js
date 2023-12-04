const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Escola").then(() => {
    console.log("conectado ao db")
}).catch((err) => {
    console.log(err)
})

//exportando o mongoose daqui para pegar la nos models
module.exports = mongoose