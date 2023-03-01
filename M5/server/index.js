const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudcontas",
});

app.use(express.json());
app.use(cors());

app.post("/transactions", (req, res) => {

    const { tittle, type, category, amount, date } = req.body;

    let mysql = "INSERT INTO contas ( tittle, type, category, amount, date) VALUES (?, ?, ?, ?, ?)";

    db.query(mysql, [tittle, type, category, amount, date], (err, result) => {
        res.send(result);
    });
});

// app.post("/search", (req, res) => {
//     const { tittle, type, category, amount, date } = req.body;

//     let mysql = "SELECT * FROM contas WHERE tittle = ? type = ? category = ? amount = ? date = ?";

//     db.query(mysql, [tittle, type, category, amount, date], (err, result) => {
//         if (err) res.send(err);
//         res.send(result);
//     });
// });

app.get("/transactions", (req, res) => { 
    
    let mysql = "SELECT * FROM contas";

    db.query(mysql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.put("/transactions/:id", (req, res) => {

    const { tittle, type, category, amount, date } = req.body;
    const id = req.params.id;

    let mysql = "UPDATE contas SET tittle = ?, type = ?, category = ?, amount = ?, date = ? WHERE id = ?";
    db.query(mysql, [tittle, type, category, amount, date, id], (err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});

app.delete("/transaction/:id", (req, res) => {

    const { id } = req.params;

    let mysql = "DELETE FROM contas WHERE id = ?";

    db.query(mysql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Rodando o Servidor na Porta 3001");
})