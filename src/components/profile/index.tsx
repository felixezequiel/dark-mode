import { useContext } from "react";
import { Colors } from "../../colors";
import { ImageProfile } from "./style"

export const Profile = () => {
  const { colors } = useContext(Colors)
  return (
    <ImageProfile 
      height={ 70 }
      color={ colors.mode }
      src='/profile.svg'
      alt='profile'
    />
  )
}