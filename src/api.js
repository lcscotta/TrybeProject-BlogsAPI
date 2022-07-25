const express = require('express');

// ...

const loginRouter = require('./database/routers/loginRouter');
const errorMiddleware = require('./database/middleware/errorMiddleware.js').default;
const userRouter = require('./database/routers/userRouter');

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use(errorMiddleware);
app.use('/user', userRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
