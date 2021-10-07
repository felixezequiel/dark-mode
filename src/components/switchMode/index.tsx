import { ContainerSwitchMode } from "./styles"
import Switch from 'react-switch'
import { useContext, useState } from "react"
import { Colors } from "../../colors"

export const SwitchMode = () => {
  const [ checked, setChecked ] = useState<boolean>(true)
  const { colors, setMode } = useContext(Colors)

  const handleChange = (check: boolean) => {
    if (check) setMode?.('white')
    else setMode?.('dark')
    setChecked(check)
  }

  return (
    <ContainerSwitchMode>
      <Switch 
        onChange={ handleChange }
        checked={ checked }
        onColor={ colors.secondary }
        offColor={ colors.atention }
        checkedIcon={ false }
        uncheckedIcon={ false }
        handleDiameter={ 20 }
        height={ 15 }
        width={ 30 }
      />
    </ContainerSwitchMode>
  )
}