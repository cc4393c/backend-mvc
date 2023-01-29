const express = require('express');
const { join } = require('node:path');
const router = require('./router');

const app = express();
app.use(router);

// set EJS as template engine
app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, 'public')));

// http://localhost:8080 => index.ejs
// http://localhost:8080/detail/id => detail.ejs

app.get('/html_text', (req, res) => {
  const title = 'This is a html text';
  const list = [
    {
      id: 1,
      name: 'Mike',
      age: 6,
      score: 6
    },
    {
      id: 2,
      name: 'Tom',
      age: 8,
      score: 8
    },
    {
      id: 3,
      name: 'Rose',
      age: 10,
      score: 10
    }
  ];

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic</title>
      <link rel="stylesheet" href="./css/static.css" />
    </head>
    <body>
      <div id="app">
        <h1>${title}</h1>
        <ul>
          ${list.map(item =>
    `
                <li>
                  <p>ID: ${item.id}</p>
                  <p>Name: ${item.name}</p>
                  <p>Age: ${item.age}</p>
                  <p>Score: ${item.score}</p>
                </li>
              `
  ).join('')
    }
        </ul>
      </div>

      <script src="./js/static.js"></script>
    </body>
    </html>
  `);
});

app.get('/html.ejs', (req, res) => {
  const title = 'This is a html text';
  const list = [
    {
      id: 1,
      name: 'Mike',
      age: 6,
      score: 6
    },
    {
      id: 2,
      name: 'Tom',
      age: 8,
      score: 8
    },
    {
      id: 3,
      name: 'Rose',
      age: 10,
      score: 10
    }
  ];

  res.render('html', {
    title,
    list
  });
});

app.listen(8080, (req, res) => console.log('ok'));
