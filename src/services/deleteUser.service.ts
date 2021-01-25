import { DeleteResult, getRepository } from "typeorm";
import  User  from "../entity/User";

interface Request {
    ids: string[];
    
}
interface Response {
    deleted: string[],
    errors: string[]
}
 

 class DeleteUserService {

    public async execute({ ids } : Request): Promise<Response> {
        let deleted: string[] =[];
        let errors: string[] =[];
        for (let id of ids){

            const usersRepository = getRepository(User);
            const user = await usersRepository.findOne({
                where: {id}
            });
            if (!user) {
                errors.push(id);
            }else{
                await usersRepository.delete(id);
                deleted.push(id);

            }
        }
            return  {deleted, errors} 
    }
    
 }

export default DeleteUserService;