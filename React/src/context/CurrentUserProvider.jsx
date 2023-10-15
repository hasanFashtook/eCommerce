import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const CurrentUserContext = createContext({})

function CurrentUserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({})
  return (
    <CurrentUserContext.Provider
      value={{ userDetails, setUserDetails }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

CurrentUserProvider.propTypes = {
  children: PropTypes.object,
}

export default CurrentUserProvider
