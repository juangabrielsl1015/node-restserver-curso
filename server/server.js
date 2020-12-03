require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Configuración global de rutas
app.use(require('./routes/index'));

// parse application/json
app.use(bodyParser.json());

// await mongoose.connect('mongodb://localhost:27017/cafe', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

mongoose.connect(process.env.urlDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, (err, res) => {
  if (err) {
    throw err;
  }

  console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto: ', process.env.PORT);
});