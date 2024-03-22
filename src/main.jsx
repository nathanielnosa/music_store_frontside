
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterMain from './routers/RouterMain.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterMain />
  </Provider>,
)
