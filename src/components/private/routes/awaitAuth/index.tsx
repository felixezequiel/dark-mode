import { ComponentType, useContext } from "react"
import { RouteComponentProps } from "react-router"

import { Colors } from "../../../../colors"
import { ImageProfile } from "../../../profile/style"
import { ContainerAwaitAuth } from "./style"

interface PropsAwaitAuth {
  page: ComponentType<RouteComponentProps>,
  auth: boolean,
  props: RouteComponentProps
}

export const AwaitAuth = ({ page: Component, auth, props }: PropsAwaitAuth) => {
  const { colors } = useContext(Colors)
  return (
    <ContainerAwaitAuth>
      {!auth ?
      <ImageProfile 
        color={ colors.mode } 
        height={ 50 }
        src='/spinner.svg'
      /> :
      <Component { ...props }/>}
    </ContainerAwaitAuth>
  )
}