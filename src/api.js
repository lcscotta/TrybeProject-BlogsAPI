const express = require('express');

// ...
const loginRouter = require('./database/routers/loginRouter');
const errorMiddleware = require('./database/middleware/errorMiddleware');
const userRouter = require('./database/routers/userRouter');
const categoryRouter = require('./database/routers/categoryRouter');
const blogpostRouter = require('./database/routers/blogpostRouter');

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use(errorMiddleware);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/post', blogpostRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
