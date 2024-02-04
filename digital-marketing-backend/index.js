const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

const db = new sqlite3.Database('./blogs.db');

db.run(`
  CREATE TABLE IF NOT EXISTS blog (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    brief_description TEXT
  )
`);

app.use(bodyParser.json());
app.use(cors());

app.get('/blog', (req, res) => {
    db.all('SELECT * FROM blog', (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // const blog = rows.map(row => ({
        //     id: row.id,
        //     image: row.image,
        //     title: row.title,
        //     brief_description: row.brief_description,
        //   }));
        // console.log(blog);
        // console.log(rows);
        res.json(rows);
      }
    });
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
