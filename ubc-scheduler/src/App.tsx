import * as React from "react"
import { Provider } from "react-redux"
import Router from './router/RouterComponent';
import store from './store/store';
import "./styles.css"

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App