import { Request, Response} from 'express'
import { db } from "../database"

export class UsersControllers {
    createUsers (request: Request, response: Response): Response {
        const { name } = request.body
    
        if (name.length === 0) {
            return response.status(403).json({mensagem:'não é possivel criar usuarios sem nome'})
        }
            db.push(name as string)
            return response.status(201).json({mensagem:`usuario ${name} criado`})
    }
    listUsers (request: Request, response: Response): Response {
        return response.status(200).json(db)
    }
}
