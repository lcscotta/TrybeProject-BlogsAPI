const express = require('express');

// ...
const Login = require('./database/routes/login');
const User = require('./database/routes/user');
const Category = require('./database/routes/category');
const Post = require('./database/routes/post');

const app = express();

app.use(express.json());

// ...
app.use('/login', Login);
app.use('/user', User);
app.use('/categories', Category);
app.use('/post', Post);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
