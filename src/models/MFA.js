const connect = require("../database/connection")

const codSchema = connect.Schema({
    MFA:{type:Number}
})

module.exports = connect.model("MFA", codSchema)