const express = require('express')
const app = express()



const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stage_bdd'
});

app.get('/', (req,res) =>{
    res.send("hello world")
})




/*
app.post('/register', (req,res)=>{

    const email = req.body.email
    const password = req.body.password
    console.log({email, password})

/*
    db.query("INSERT INTO employe (nomEmploye,prenomEmploye,id) values ('its me','youu',8);", [email,password] ,(err,result)=>{
    })

})*/

app.listen(3001, ()=>{
    console.log('running on port 3001')
})