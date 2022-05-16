import { createContext, useContext } from 'react'

import constants from '../constants'

type Constants = typeof constants

export const ConstantsContext = createContext<Constants>(constants)

export const useConstants = () => useContext(ConstantsContext)
