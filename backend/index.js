const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');


const db = new sqlite3.Database('db.sqlite3');
const app = express();

app.use(express.json());
app.options('*', cors());


app.post('/', async (req, res) => {
    console.log('Request accepted!');

    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO users(name, email, phone, comment) VALUES(?,?,?,?)');
        stmt.run(req.body.name, req.body.email, req.body.phone, req.body.comment);
        stmt.finalize();
    });

    res.json({
        status: 'ok',
        message: 'Ваши данные успешно записаны'
    })
})

app.listen(3000);