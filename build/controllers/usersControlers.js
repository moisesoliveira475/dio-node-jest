"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersControllers = void 0;
const database_1 = require("../database");
class UsersControllers {
    createUsers(request, response) {
        const { name } = request.body;
        if (name.length === 0) {
            return response.status(403).json({ mensagem: 'não é possivel criar usuarios sem nome' });
        }
        database_1.db.push(name);
        return response.status(201).json({ mensagem: `usuario ${name} criado` });
    }
    listUsers(request, response) {
        return response.status(200).json(database_1.db);
    }
}
exports.UsersControllers = UsersControllers;
