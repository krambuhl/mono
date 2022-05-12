import { createContext, useContext } from 'react'

import * as constants from '../constants'

export const ConstantsContext = createContext<typeof constants>(constants)

export const useConstants = () => useContext(ConstantsContext)
