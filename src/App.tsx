import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  );
}

export default App;
