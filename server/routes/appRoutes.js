const express = require('express');
const app = express();
const port = 3005;

const db = require('../db');

app.get('/', async (req, res) => {
    try {
        let result = await db.query("SELECT * FROM todo");
        res.send(result.rows);
    }
    catch (e) {
        console.error(e);
    }
});

app.get('/:id', async (req, res) => {
    try {
        let result = await db.query("SELECT * FROM todo WHERE id = $1", [req.params.id]);
        res.send(result.rows);
    }
    catch (e) {
        console.error(e);
    }
});

app.post('/add/:task', async (req, res) => {
    console.log('req', req.params);
    try {
        let result = await db.query("INSERT INTO todo (task, status) VALUES ($1, $2)", [req.params.task, 0]);
        res.send(result.rows);
    }
    catch (e) {
        console.error(e);
    }
});

app.update('/updateName/:id/:name', async (req, res) => {
    console.log('req', req.params);
    try {
        let result = await db.query("UPDATE todo SET `name` = $2 WHERE id = $1", [req.params.id, req.params.name]);
        res.send(result.rows);
    }
    catch (e) {
        console.error(e);
    }
});

app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`);
});
