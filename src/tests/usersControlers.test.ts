import { Request } from "express"
import { UsersControllers } from "../controllers/usersControlers"
import { makeMockResponse } from "../mocks/mockResponse"

describe('users controllers', () => {
    const UsersController = new UsersControllers()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    it('deve listar os usuarios', () => {
        UsersController.listUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(0)
    })
    
    it('deve criar um novo usuario', () => {
        mockRequest.body = {
            name: 'moises'
        }
        UsersController.createUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({mensagem:`usuario moises criado`})
    })

    it('nao deve criar um usuario sem nome', () => {
        mockRequest.body = {
            name: ''
        }
        UsersController.createUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem:'não é possivel criar usuarios sem nome'})
    })
})