import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Server started at port ${port}`);
});
