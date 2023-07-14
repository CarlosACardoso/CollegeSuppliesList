const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();

let items = [];
const filesPath = path.join(__dirname, 'data');

const saveItems = (items, filesPath) => {
    const fileName = 'ListaSimples.js';
    const fileContent = `module.exports = ${JSON.stringify(items, null, 2)};`;
    const fullPath = path.join(filesPath, fileName);
  
    fs.writeFile(fullPath, fileContent, (err) => {
      if (err) {
        console.error(`Erro ao salvar arquivo ${fullPath}: ${err}`);
      } else {
        console.log(`Arquivo ${fullPath} salvo com sucesso.`);
      }
    });
  };
  

const readItems = (fileName) => {
  const fullPath = path.join(filesPath, fileName);
  const fileContent = require(fullPath);
  items = fileContent;
};

router.get('/suppliesList', (request, response) => {
  readItems('ListaSimples.js');
  response.send(items);
});

app.use(cors());
app.use(router);

app.listen(3000, () => console.log('Server started at port 3000'));
