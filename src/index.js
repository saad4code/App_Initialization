import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { store, persistor } from './app/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from './app/Router'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById(`root`),
)
reportWebVitals()
