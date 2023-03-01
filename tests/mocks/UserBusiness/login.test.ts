import { UserBusiness } from "../../../src/business/UserBusiness"
import {UserDatabaseMock} from "../UserDatabaseMock"
import {IdGeneratorMock} from "../IdGeneratorMock"
import {TokenManagerMock} from "../TokenManagerMock"
import {HashManagerMock} from "../HashManagerMock"
import { LoginInputDTO } from "../../../src/dtos/userDTO"
// import { USER_ROLES } from "../../../src/types"


describe("Login", ()=>{
    const useBusiness = new UserBusiness(
        new UserDatabaseMock(),
      new  IdGeneratorMock(),
      new TokenManagerMock(),
      new HashManagerMock()


    )
    test("retornar token de login da conta normal", async ()=>{
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }
        const response = await useBusiness.login(input)
        expect(response).toEqual({token: "token mock normal"})
    })
})