import { store } from "./reduxStore/store.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
  //     <React.StrictMode>
  // </React.StrictMode>
);
