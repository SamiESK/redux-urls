import "./App.css";
import { React } from "react";
import Search from "./components/search";
import { Provider } from "react-redux";
import store from "./store/createStore";
import Results from "./components/search/results";

// This file houses all the components that are used in the app

function App() {

  return (
    // Allow provider to pass store to all components
    <Provider store={store}>
      <Search />
      <Results/>
    </Provider>
  );
}

export default App;
