import Express, { application } from 'express';

const app: Express.Application = Express();
const PORT: number = 3000;

app.get("/", (req:Express.Request, res:Express.Response)=>{
    res.send("<p>Hola Mundo</p>")
});

app.listen(PORT, ()=>{
    console.log(`App is listenig at port ${PORT}`)
});