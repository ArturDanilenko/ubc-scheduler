import * as React from "react"
import { Provider } from "react-redux"
import Router from './router/RouterComponent';
import store from './store/store';
import { Box } from "@mui/material";
import "./styles.css"

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Box sx={{display:"flex", flexDirection: "row"}}>
        <Router/>
      </Box>
    </Provider>
  )
}

export default App