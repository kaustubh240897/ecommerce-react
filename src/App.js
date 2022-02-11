import { Provider } from "react-redux";
import store from "./redux/store";
import RoutesCom from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RoutesCom />
    </Provider>
  );
}

export default App;
