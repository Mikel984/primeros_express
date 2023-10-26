import Express, { application } from 'express';
import path from 'path';

const app: Express.Application = Express();
const PORT: number = 3000;

app.use(Express.static(path.join(__dirname,'..', 'public')));
app.use("/scripts", Express.static(path.join(__dirname, '..', 'build')))

app.get("/", (req:Express.Request, res:Express.Response)=>{
    res.send("<p>Hola Mundo</p>")
});

app.listen(PORT, ()=>{
    console.log(`App is listenig at port ${PORT}`)
});