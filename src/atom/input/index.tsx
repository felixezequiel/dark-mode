import { useContext } from "react"
import { Colors } from "../../colors"
import { InputCustom } from "./style"

export const Input = ({ ...rest }) => {
  const { colors } = useContext(Colors)
  return (
    <InputCustom
      { ...rest }
      color={ colors.secondary }
    />
  )
}