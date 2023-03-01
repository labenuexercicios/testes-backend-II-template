import { UserBusiness } from "../../../src/business/UserBusiness"
import {UserDatabaseMock} from "../UserDatabaseMock"
import {IdGeneratorMock} from "../IdGeneratorMock"
import {TokenManagerMock} from "../TokenManagerMock"
import {HashManagerMock} from "../HashManagerMock"
import { LoginInputDTO, SignupInputDTO } from "../../../src/dtos/userDTO"
// import { USER_ROLES } from "../../../src/types"


describe("Signup", ()=>{
    const useBusiness = new UserBusiness(
        new UserDatabaseMock(),
      new  IdGeneratorMock(),
      new TokenManagerMock(),
      new HashManagerMock()


    )
    test("retornar token de signup da conta normal", async ()=>{
        const input: SignupInputDTO = {
            name: "Normal1 Mock",
            email: "normal1@email.com",
            password: "bananinha"
        }
        const response = await useBusiness.signup(input)
        expect(response).toEqual({token: "token mock normal"})
    })
})