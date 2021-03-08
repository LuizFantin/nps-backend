import {Request, Response} from 'express'
import { getConnection } from 'typeorm';
import User from '../entity/User';

class UserController {
    async create(request: Request, response: Response) {
        const {first_name, last_name, age, email} = request.body;
        const usersRepository = getConnection().getRepository(User);

        const user = usersRepository.create({
            firstName: first_name,
            lastName: last_name,
            age: age,
            email: email
        })

        await usersRepository.save(user)

        response.status(201).json({message: "Usuário criado com sucesso", user: user})
    }
}

export {UserController}