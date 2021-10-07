import { FormEvent } from "react"
import { Input } from "../../atom/input"
import { Profile } from "../../components/profile"
import { ContainerLogin } from "./style"
import serialize from "form-serialize"
import { Button } from "../../atom/button"

export const Login = () => {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = serialize(event.currentTarget, { hash: true, empty: false })
    console.log(data)
  }

  return (
    <ContainerLogin
      onSubmit={ handleSubmit }
    >
      <Profile />
      <Input 
        type='text'
        placeholder='User...'
        name='user'
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