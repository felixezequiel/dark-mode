import { ComponentType, useEffect, useState } from "react"
import { Route, RouteComponentProps, useHistory } from "react-router"
import { UserAutenticator } from "../../../global/functions"
import { BasicAuthTypes } from "../../../types/global"
import { AwaitAuth } from "./awaitAuth"

interface PropsPrivateRoute {
  page: ComponentType<RouteComponentProps>,
  exact?: boolean,
  path: string
}

export const PrivateRoute = ({ page: Component, ...rest }: PropsPrivateRoute) => {
  const [ auth, setAuth ] = useState<boolean>(false)
  const history = useHistory()

  useEffect(() => {
    (async () => {
      const storage = localStorage.getItem('login')
      if (!storage) return history.push('/')
      const login: BasicAuthTypes = JSON.parse(storage)
      const valid = await UserAutenticator(login)
      if (!valid) return history.push('/')
      else return setAuth(valid)
    })()
  }, [history])

  return (
    <Route 
      { ...rest }
      render={ (props) => <AwaitAuth auth={ auth } page={ Component } props={ props }/> }
    />
  )
}