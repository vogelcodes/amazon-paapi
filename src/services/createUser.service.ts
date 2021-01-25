import { getRepository } from "typeorm";
import  User  from "../entity/User";

interface Request {
    name: string;
    email: string;
    password: string;
}
 

 class CreateUserService {

    public async execute({ name, email, password} : Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: {email}
        });
        if (checkUserExists){
            throw new Error ('Email já cadastrado.')
        }
        if (password.length<8){
            throw new Error ('A senha precisa ter mais que 8 digitos.')
        }
        if (name == ''){
            name = 'user';
        }

        const user = usersRepository.create({
            name, email, password
        });
        await usersRepository.save(user);
        return user;



    }
    

}
export default CreateUserService;