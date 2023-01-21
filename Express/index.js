const express = require("express") // importando o express 
const app = express() // iniciando o express

app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao guia do programador</h1>")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog")
})

app.get("/canal", (req, res)=>{
    res.send("<h1>Escolhe seu vídeo</h1>")
})

app.get("/canal/youtube", (req, res)=>{
    res.send("Bem vindo ao meu canal")
})



app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})


