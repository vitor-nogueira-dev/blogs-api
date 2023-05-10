const express = require('express');

const loginRoutes = require('./routes/login.routes');
const userRoutes = require('./routes/user.routes');
const categoriesRoutes = require('./routes/categories.routes');

const errorHandler = require('./middlewares/error.middleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);

// ...
app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
