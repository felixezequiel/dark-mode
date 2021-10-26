import { FormEvent } from "react"
import { Input } from "../../atom/input"
import { Profile } from "../../components/profile"
import { ContainerLogin } from "./style"
import serialize from "form-serialize"
import { Button } from "../../atom/button"
import { BasicAuthTypes } from "../../types/global"
import { useHistory } from "react-router"


export const Login = () => {
  const history = useHistory()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = serialize<BasicAuthTypes>(event.currentTarget, { hash: true, empty: false })
    localStorage.setItem('login', JSON.stringify(data))
    history.push('/home')
  }
  // testes
  return (
    <ContainerLogin
      onSubmit={ handleSubmit }
    >
      <Profile />
      <Input 
        type='text'
        placeholder='User...'
        name='username'
      />
      <Input 
        type='password'
        placeholder='Password...'
        name='password'
      />
      <Button 
        text={ 'Login' }
      />
    </ContainerLogin>
  )
}