const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();

let list = [{ items: [] }];
let password = "";
const filesPath = path.join(__dirname, 'data');
  
const checkFileExists = (fileName) => {
  const fullPath = path.join(filesPath, fileName);
  return fs.existsSync(fullPath+'.js');
};

const saveItems = (items, fileName, password) => {
  const fileContent = `module.exports = ${JSON.stringify(items, null, 2)};`;
  const fullPath = path.join(filesPath, fileName + '.js');
  const passwordContent = `module.exports = ${JSON.stringify(password, null, 2)};`;
  const passwordPath = path.join(filesPath, fileName + 'Password.js');

  fs.writeFile(fullPath, fileContent, (err) => {
    if (err) {
      console.error(`Erro ao salvar arquivo ${fullPath}: ${err}`);
    } else {
      console.log(`Arquivo ${fullPath} salvo com sucesso.`);
    }
  });

  fs.writeFile(passwordPath, passwordContent, (err) => {
    if (err) {
      console.error(`Erro ao salvar arquivo ${fullPath}: ${err}`);
    } else {
      console.log(`Arquivo ${fullPath} salvo com sucesso.`);
    }
  });
};

const checkPassword = (fileName, listPassword) =>{
  fileName = fileName + 'Password.js'
  let fullPath = path.join(filesPath, fileName);
  const fileContent = require(fullPath);
  password = fileContent;
  if (password === listPassword){
    return true;
  }else{
    return false;
  }
};

const readItems = (fileName) => {
  const fullPath = path.join(filesPath, fileName);
  const fileContent = require(fullPath);
  list = fileContent;
};

router.post('/saveList', (request, response) => {
  const body = request.body
  if (checkFileExists(body.listName)){
    if(checkPassword(body.listName, body.listPassword)){
        saveItems(body.listItems, body.listName, body.listPassword)
        response.send('Salvo com sucesso.')
    }else{
      response.send('Senha Incorreta.')
    }
  }else{
    saveItems(body.listItems, body.listName,body.listPassword)
    response.send('Criada com sucesso.');
  }
  
});

router.get('/suppliesList', (request, response) => {
  const query = request.query
  if (query.nameList === "" || query.nameList === undefined) {
    list = []
  }else{
    readItems(`${query.nameList}`)
  }  
  response.send(list)
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => console.log('Server started at port 3000'));