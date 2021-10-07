import { useContext } from "react"
import { Colors } from "../colors"
import { SwitchMode } from "../components/switchMode"
import { GlobalStyle } from "../globalStyle"
import { ChildrenProps } from "../types/global"
import { ContainerTemplate } from "./styles"

export const Template = ({ children }: ChildrenProps) => {
  const { colors } = useContext(Colors)
  return (
    <ContainerTemplate
      backgroundColor={ colors.principal }
    >
      <GlobalStyle color={ colors.secondary }/>
      <SwitchMode />
      { children }
    </ContainerTemplate>
  )
}