import {request, response, Router} from 'express';
import { getRepository } from 'typeorm';
import User from '../entity/User';
import CreateUserService from '../services/createUser.service'
import DeleteUserService from '../services/deleteUser.service'


const usersRouter = Router();
usersRouter.post('/', async (request,response)=>{
    try {
        
        const {name, email, password} = request.body;
        const createUser = new CreateUserService();
        
        const user = await createUser.execute({name, email, password});
        return response.json(user)
    } catch (error) {
        return response.status(400).json({error: error.message});
    }
})
usersRouter.get('/', async (req,response)=>{
    const usersRepository = getRepository(User);
    const items = await usersRepository.find();
    return response.json(items);

})
usersRouter.delete('/', async (request, response)=> {
    try{
        const {ids} = request.body;
        const deleteUser = new DeleteUserService();
        const deletedUser = await deleteUser.execute({ids});

        return response.json({deletedUser})

    } catch (error){
        return response.status(400).json({error: error.message})
    }


    
})

export default usersRouter;