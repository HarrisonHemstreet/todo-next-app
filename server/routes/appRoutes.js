const express = require('express');
const app = express();
const port = 3005;

const db = require('../db');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/:id', async (req, res) => {
    const query = {
        text: "SELECT * FROM todos WHERE id = $1",
        values: [req.params.id]
    }
    try {
        await db.query(query);
    }
    catch (e) {
        console.error(e);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
