import {Router} from 'express';

const sessionsRouter = Router();
sessionsRouter.post('/', (request,response)=>{
    const {name, email} = request.body;
    return response.json(request.body)
})
sessionsRouter.get('/', (req,response)=>{
    return response.json({user:"Info"})
})

export default sessionsRouter;