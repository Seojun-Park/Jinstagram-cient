import { gql, useQuery } from '@apollo/client';
import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import theme from '../Styles/Theme'

const Is_LOGGED_IN = gql`
query IsLoggedIn{
  isLoggedIn @client
}
`

const AppContext = createContext(null)

const App = (): any => {
  const { data: { isLoggedIn } } = useQuery(Is_LOGGED_IN)
  return (
    <AppContext.Provider value={isLoggedIn}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes isLoggedIn={isLoggedIn} />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  )
}
export default App