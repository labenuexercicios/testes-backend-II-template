import {UserBusiness} from "../../src/business/UserBusiness"
import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import {TokenManagerMock} from "../mocks/TokenManagerMock"
import {HashManagerMock} from "../mocks/HashManagerMock"
import { USER_ROLES } from "../../src/types"
import { LoginInputDTO, LoginOutputDTO } from "../../src/dtos/userDTO"

describe("Login", ()=>{

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("testar login de um usuario NORMAL", async ()=>{
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }

        const response: LoginOutputDTO = await userBusiness.login(input) 

        const token = "token-mock-normal"

        expect(response.token).toBe(token)
    })

    test("testar login de um usuario ADMIN", async ()=>{
        const input: LoginInputDTO = {
            email: "admin@email.com",
            password: "bananinha"
        }

        const response: LoginOutputDTO = await userBusiness.login(input) 

        const token = "token-mock-admin"

        expect(response.token).toBe(token)
    })
})