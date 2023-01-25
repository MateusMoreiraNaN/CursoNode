const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/",(req, res)=>{
    //res.render("index.ejs")
    res.render("principal/perfil")
})

app.listen(8080,()=>{
    console.log('App rodando');
})