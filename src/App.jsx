import MainRouter from "./router/MainRouter";
import "./Common.scss";
import { Provider } from "react-redux";
import initStore from "./store/store";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  )
}

export default App;
