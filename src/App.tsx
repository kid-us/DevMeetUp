import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import Home from "./components/Pages/Home";
import Version1 from "./components/Pages/V1";
import Version2 from "./components/Pages/V2";
import Version3 from "./components/Pages/V3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/v1" element={<Version1 />} />
      <Route path="/v2" element={<Version2 />} />
      <Route path="/v3" element={<Version3 />} />
    </Routes>
  );
}

export default App;
