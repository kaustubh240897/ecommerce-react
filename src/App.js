import { createTheme, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Provider } from "react-redux";
import MainContainer from "./core/Layout";
import store from "./redux/store";
import RoutesCom from "./routes";

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>

        <MainContainer>
          <RoutesCom />
        </MainContainer>
      </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
