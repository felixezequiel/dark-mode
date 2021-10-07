import React, { createContext, useEffect, useState } from "react"
import { ChildrenProps } from "../types/global"

interface StateColors {
  principal: string,
  secondary: string,
  danger: string,
  atention: string,
  success: string,
  mode: string
}

export const Colors = createContext<{ colors: StateColors, setMode?: React.Dispatch<React.SetStateAction<string>> }>({ colors: { principal: '#F2F3EE', secondary: '#12557B', danger: '#FF6F3F', atention: '#FFD02C', success: '#A3E062', mode: 'white' } })

export const ColorsProvider = ({ children }: ChildrenProps) => {
  const [ colors, setColors ] = useState<StateColors>({ principal: '#F2F3EE', secondary: '#12557B', danger: '#FF6F3F', atention: '#FFD02C', success: '#A3E062', mode: 'white' })
  const [ mode, setMode ] = useState('white')

  useEffect(() => {
    switch(mode) {
      case('white'):
        setColors({ principal: '#F2F3EE', secondary: '#12557B', danger: '#FF6F3F', atention: '#FFD02C', success: '#A3E062', mode })
        break;
      case('dark'):
        setColors({ principal: '#12557b', secondary: '#F2F3EE', danger: '#FF6F3F', atention: '#FFD02C', success: '#A3E062', mode })
        break;
      default:
        setColors({ principal: '#10828D', secondary: '#12557B', danger: '#FF6F3F', atention: '#FFD02C', success: '#A3E062', mode })
        break;
    }
  }, [mode])

  return (
    <Colors.Provider value={{ colors, setMode }}>
      { children }
    </Colors.Provider>
  )
}