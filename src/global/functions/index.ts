import { SearchUser } from "../../api"
import { messages } from "../../helpers"
import { BasicAuthTypes } from "../../types/global"

export const UserAutenticator = async (login: BasicAuthTypes): Promise<boolean> => {
  const response = await SearchUser(login).catch(erro => erro)
  if (response.status === 200) return messages.userAutenticate().then(() => true)
  else return messages.invalidUser().then(() => false)
}