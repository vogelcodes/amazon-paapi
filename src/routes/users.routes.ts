import {Router} from 'express';
import User from '../models/User';


const usersRouter = Router();
usersRouter.post('/', (request,response)=>{
    const {name, email} = request.body;
    const user = new User(name, email);
    return response.json(user)
})
usersRouter.get('/', (req,response)=>{
    return response.json({user:"Info"})
})

export default usersRouter;