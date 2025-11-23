const express = require('express');
 const {Pool} = require("pg");
const app = express();



const cors = require("cors");
app.use(cors());

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    password: 'susbi10',//install garda pw
    host: 'localhost',
    database: 'postgres',
    port: 5432
});
 
app.get("/gallery", (req,res) => {
    pool.query(`select * from gallery`)
    .then(data =>  res.json({"data": data.rows}))
    .catch(err => console.log(err))
   
})

app.post("/gallery", (req,res) =>{
    pool.query(`insert into gallery(title, image)
        values($1,$2) returning *`,
        [req.body.title, req.body.image])
        .then(data =>  res.json({"data": data.rows}))
        .catch(err => console.log(err))

   
})

app.get("/signup", (req,res) => {
    
    pool.query(`select * from signup`)
    .then(data =>  res.json({"data": data.rows}))
    .catch(err => console.log(err))
   
})

app.post("/signup", (req,res) =>{

    pool.query(`insert into signup(username, email, password)
        values($1,$2,$3) returning *`,
        [req.body.username, req.body.email, req.body.password])
        .then(data =>  res.json({"data": data.rows}))
        .catch(err => console.log(err))

    })

app.get("/contact", (req,res) => {
    //  res.json({"data": "getting data"})
    pool.query(`select * from contact`)
    .then(data =>  res.json({"data": data.rows}))
    .catch(err => console.log(err))
   
})

app.post("/contact", (req,res) =>{
// res.json({"data": "Posting data"})
    pool.query(`insert into contact(username, email, phone, message)
        values($1,$2,$3,$4) returning *`,
        [req.body.username, req.body.email, req.body.phone, req.body.message])
        .then(data =>  res.json({"data": data.rows}))
        .catch(err => console.log(err))

    })

app.listen(3000, () =>
console.log('Server running on 3000'));
