//Importamos  Express .
const express = require('express');
const path = require('path');

//Ao iniciar uma aplicação utilizando HEROKU proporciona um 
const nomeApp = process.env.npm_package_name || 'gerenciarCandidatos';
// instaciamos app
const app = express();

// mapeamos la carpeta de produccion del proyeco de angulae
app.use(express.static(`${__dirname}/dist/${nomeApp}`));

// aceptando todo tipo dereques por methot GET
app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

// inicializacion dek servidor, con la precaucion
// de que heroku proporcione el puerto en el aso contrario sera 8080
app.listen(process.env.PORT || 8080);