import { UserBusiness } from "../../../src/business/UserBusiness"
import {UserDatabaseMock} from "../UserDatabaseMock"
import {IdGeneratorMock} from "../IdGeneratorMock"
import {TokenManagerMock} from "../TokenManagerMock"
import {HashManagerMock} from "../HashManagerMock"
import { USER_ROLES } from "../../../src/types"


describe("getAll", ()=>{
    const useBusiness = new UserBusiness(
        new UserDatabaseMock(),
      new  IdGeneratorMock(),
      new TokenManagerMock(),
      new HashManagerMock()


    )
    test("Deve retornar uma lista de users", async()=>{
        const response = await useBusiness.getAll()
        expect(response).toHaveLength(2)
        expect(response).toContainEqual({
            id: "id-mock",
            name: "Admin Mock",
            email: "admin@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String),
            role: USER_ROLES.ADMIN
        })

    })
})