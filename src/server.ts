import './database/connection';
import express from 'express';
import routes from './routes';



console.log(process.env);
const app = express()

app.use(express.json());
app.use(routes);

app.listen(1337, ()=> {
    console.log('VogelCodesAPI on 1337');
})
