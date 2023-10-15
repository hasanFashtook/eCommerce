import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import CurrentUserProvider from './context/CurrentUserProvider.jsx'
import { Store } from './Store/Store.jsx'
import "@fontsource/roboto"
import '@fontsource-variable/noto-kufi-arabic';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={Store}>
      <CurrentUserProvider>
        <Router>
          <App />
        </Router>
      </CurrentUserProvider>
    </Provider>
  </React.StrictMode>,
)
