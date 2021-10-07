import { useContext } from "react"
import { Colors } from "../../colors"
import { ButtonCustom } from "./style"

interface PropsButton extends EventListenerOptions {
  text: string,
}

export const Button = ({ text, ...rest }: PropsButton) => {
  const { colors } = useContext(Colors)

  return (
    <ButtonCustom
      color={ colors.principal }
      backgroundColor={ colors.secondary }
      { ...rest }
    >
      { text }
    </ButtonCustom>
  )
}