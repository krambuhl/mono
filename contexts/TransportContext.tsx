import React, { useContext, useState } from 'react'

import { useInterval } from 'hooks/useInterval'

interface TransportProviderProps {
  children: React.ReactNode
}

type SetStateAction = React.Dispatch<React.SetStateAction<number>>

interface TransportContextProps {
  frame: number
  frameSize: number
  setFrame: (x: number) => void | SetStateAction
  setFrameSize: (x: number) => void | SetStateAction
}

export const TransportContext = React.createContext<TransportContextProps>({
  frame: 0,
  setFrame: () => {},
  frameSize: 1,
  setFrameSize: () => {},
})

export const useTransport = () => useContext(TransportContext)

export function TransportProvider({ children }: TransportProviderProps) {
  const [frame, setFrame] = useState(0)
  const [frameSize, setFrameSize] = useState(1)

  useInterval(() => {
    setFrame(frame + frameSize)
  }, 1000 / 30)

  return (
    <TransportContext.Provider
      value={{
        frame,
        setFrame,
        frameSize,
        setFrameSize,
      }}
    >
      {children}
    </TransportContext.Provider>
  )
}
