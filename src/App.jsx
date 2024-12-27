// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import Navbar from "./assets/components/layout/Navbar";
import Shop from "./pages/Shop";
import "./App.css";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;