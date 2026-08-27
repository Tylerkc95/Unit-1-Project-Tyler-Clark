import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/about" element={<About />} /> 
      </Routes>
    </>
  );
}

export default App;
