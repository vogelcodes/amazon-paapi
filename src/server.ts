import './database/connection';
import express from 'express';
import routes from './routes';



const app = express()

app.use(express.json());
app.use(routes);

app.listen(1337, ()=> {
    console.log('VogelCodesAPI on 1337');
})
