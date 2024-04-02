
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterMain from './routers/RouterMain.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterMain />
    </PersistGate>
  </Provider>,
)
