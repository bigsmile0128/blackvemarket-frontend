import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import routes from "./pages/index";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {routes.map((data, index) => (
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={data.path}
            element={data.component}
            key={index}
          />
        ))}
      </Routes>
    </Provider>
  );
}

export default App;
